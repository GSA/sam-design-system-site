import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environment';

const regexComponent =
  new RegExp('([^/]*(\.component|\.directive))');

@Injectable()
export class DocumentationService {

  constructor(private _http: HttpClient) { }

  public loadData(): Observable<any> {
    return this._http.get(`${environment.DEPLOYURL}/assets/docs.json`);
    // .pipe(
    //   map((res: HttpResponse<any>) => res.body.json())
    // );
  }

  /**
   * Gets all components from docs.json
   */
  public getComponents(): ReplaySubject<any> {
    const components: ReplaySubject<any> = new ReplaySubject();
    this.loadData()
      .subscribe(
        (data) => {
          components.next(data.children.reduce((accum, child) => {
            if (child.name.match(regexComponent) && child.children) {
              for (const grandchild of child.children) {
                if (!!grandchild.decorators &&
                  (grandchild.decorators[0].name === 'Component' ||
                    grandchild.decorators[0].name === 'Directive')) {
                  accum.push(grandchild);
                }
              }
            }
            return accum;
          }, []));
        },
        (error) => { throw new Error(error); }
      );
    return components;
  }

  public generateJSONReport() {
    return this.loadData()
      .subscribe(
        (data) => {
          const output = data.children.reduce((accum, child) => {
            if (child.name.match(regexComponent)) {
              for (const grandchild of child.children) {
                if (!!grandchild.decorators &&
                  (grandchild.decorators[0].name === 'Component' ||
                    grandchild.decorators[0].name === 'Directive')) {
                  accum.push(grandchild);
                }
              }
            }
            let arr = accum.slice(0);
            let finalArr = [];

            arr = arr.map(item => {
              const row = {};
              row['component'] = item['name'];
              this._deleteProps(item);
              if (item['children']) {
                item['children'] = item['children'].filter(subitem => {
                  if (subitem['kindString'] === 'Property' && subitem['decorators']) {
                    return true;
                  }
                });
                for (let i = 0; i < item['children'].length; i++) {

                  const subItem = item['children'][i];
                  delete subItem['id'];
                  delete subItem['kind'];
                  const subrow = {};

                  subrow['component'] = row['component'];
                  subrow['apiName'] = subItem['name'];

                  if (subItem['type'] && subItem['type']['name']) {
                    subrow['datatype'] = subItem['type']['name'];
                  } else if (subItem['type'] && subItem['type']['type'] && subItem['type']['type'] === 'union') {
                    const typearr = [];
                    for (let j = 0; j < subItem['type']['types'].length; j++) {
                      if (subItem['type']['types'][j]['value']) {
                        typearr.push(subItem['type']['types'][j]['value']);
                      } else if (subItem['type']['types'][j]['name']) {
                        typearr.push(subItem['type']['types'][j]['name']);
                      }
                    }
                    subrow['datatype'] = typearr.join('|');

                  } else if ((subItem['type'] && subItem['type']['type'] && subItem['type']['type'] === 'reflection')) {
                    subrow['datatype'] = 'reflection';
                  } else {
                    subrow['datatype'] = '';
                  }
                  subrow['type'] = subItem['decorators'][0]['name'];

                  subrow['comment'] = '';
                  if (subItem['comment'] && subItem['comment']['shortText']) {
                    subrow['comment'] = ('' + subItem['comment']['shortText']).replace(/\"/g, '""');
                  }
                  finalArr.push(subrow);
                }
              } else {
                finalArr.push(row);
              }

              return item;
            });
            finalArr = finalArr.filter(row => {
              if (row['type'] === 'Input' || row['type'] === 'Output') {
                return true;
              }
            });
            return accum;
          }, []);
        },
        (error) => { throw new Error(error); }
      );
  }

  /**
   * Gets first component from docs.json that matches the provided id.
   * It is expected each id should be unique.
   */
  public getComponentById(id: number): ReplaySubject<any> {
    const component: ReplaySubject<any> = new ReplaySubject();
    this.getComponents()
      .subscribe(
        (data) => {
          for (const item of data) {
            if (item.id === id) {
              component.next(item);
            }
          }
        },
        (error) => { throw new Error(error); }
      );
    return component;
  }

  /**
   * Gets first component from docs.json that matches the provideded name.
   * It is expected that each name is unique.
   */
  public getComponentByName(name: string): ReplaySubject<any> {
    const component: ReplaySubject<any> = new ReplaySubject();
    this.getComponents()
      .subscribe(
        (data) => {
          for (const item of data) {
            if (item.name === name) {
              component.next(item);
            }
          }
        },
        (error) => { throw new Error(error); }
      );
    return component;
  }

  /**
   * Gets array of properties for a component given the component's name.
   */
  public getComponentProperties(name: string): ReplaySubject<any[]> {
    if (!name) {
      throw new Error('Method must be supplied with component name');
    }

    const properties: ReplaySubject<any[]> = new ReplaySubject();

    this.getComponentByName(name)
      .subscribe(
        (data) => {
          if (data.children) {
            data.children = data.children.filter((child) => {
              if (!!child.decorators &&
                (child.decorators[0].name === 'Input' ||
                  child.decorators[0].name === 'Output')) {
                return child;
              }
            });
            data.children = data.children.sort((prev, next) => {
              if (prev.decorators[0].name === 'Input' && next.decorators[0].name === 'Output') {
                return -1;
              } else if (prev.decorators[0].name === 'Output' && next.decorators[0].name === 'Input') {
                return 1;
              } else {
                return (prev.name).localeCompare(next.name);
              }
            });
            properties.next(
              data.children
            );
          }
        },
        (error) => { throw new Error(error); }
      );

    return properties;
  }

  /**
   * Gets a property of a component by its id.
   */
  public getComponentPropertiesById(componentName: string, propertyId: number): ReplaySubject<any> {
    const property: ReplaySubject<any> = new ReplaySubject();
    this.getComponentProperties(componentName)
      .subscribe(
        (data) => {
          property.next(
            data.filter((item) => {
              if (item.id === propertyId) {
                return item;
              }
            })
          );
        },
        (error) => { throw new Error(error); }
      );
    return property;
  }

  /**
   * Gets a property of a component by its name.
   */
  public getComponentPropertiesByName(componentName: string, name: string): ReplaySubject<any[]> {
    const properties: ReplaySubject<any[]> = new ReplaySubject();
    this.getComponentProperties(componentName)
      .subscribe(
        (data) => {
          properties.next(
            data.filter((item) => {
              if (item.name === name) {
                return item;
              }
            })
          );
        },
        (error) => { throw new Error(error); }
      );
    return properties;
  }

  /**
   * Gets array of interfaces from docs.jsons
   */
  public getInterfaces(): ReplaySubject<any[]> {
    const interfaces: ReplaySubject<any[]> = new ReplaySubject();
    this.loadData()
      .subscribe(
        (data) => {
          interfaces.next(
            data.children.reduce((accum, child) => {
              if (child.children) {
                child.children.forEach((kid) => {
                  if (kid.kindString === 'Interface') {
                    accum.push(kid);
                  }
                });
              }
              return accum;
            }, [])
          );
        },
        (error) => { throw new Error(error); }
      );
    return interfaces;
  }

  /**
   * Gets array of types form docs.json
   */
  public getTypes(): ReplaySubject<any[]> {
    const types: ReplaySubject<any[]> = new ReplaySubject();
    this.loadData()
      .subscribe(
        (data) => {
          types.next(
            data.children.reduce((accum, child) => {
              if (child.children) {
                child.children.forEach((kid) => {
                  if (kid.kindString === 'Type alias') {
                    accum.push(kid);
                  }
                });
              }
              return accum;
            }, [])
          );
        },
        (error) => { throw new Error(error); }
      );
    return types;
  }

  private _deleteProps(item) {
    const unneeded = ['id', 'kind', 'kindString',
      'flags', 'groups', 'implementedTypes', 'sources',
      'decorators'];

    unneeded.forEach(
      property => delete item[property]
    );
  }
}
