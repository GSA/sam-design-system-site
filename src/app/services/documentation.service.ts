import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Request, RequestMethod, Response, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
//import * as data from '../../../dist/docs.json';

const regexComponent = new RegExp('([^/]*\.component)');
const regexNotComponent = new RegExp('([^.component])');
const regexTypes = new RegExp('types.ts');
const regexInterfaces = new RegExp('interfaces.ts');


@Injectable()
export class DocumentationService {
  public data: any;
  constructor(private _http: Http){}


  /**
   * load (once) docs.json
   */
  public load(): Promise<any> {
    var http = this._http;
    var target = this;
    if(!this.data){
      return new Promise((resolve) =>{
        http.get("docs.json").map((res)=>res.json()).subscribe( jsondata => {
          target.data = jsondata;
          resolve(true);
        });
      });
    } else {
      return Promise.resolve(true);
    }
  }
  /**
   * Gets all components from docs.json
   */
  public getComponents(): Promise<any> {
    return Promise.resolve(
      this.data.children.reduce((accum, child) => {
        if (child.name.match(regexComponent)) {
          for (const grandchild of child.children) {
            if (!!grandchild.decorators && grandchild.decorators[0].name === 'Component') {
              accum.push(grandchild);
            }
          }
        }
        return accum;
      }, [])
    );
  }

  /**
   * Gets first component from docs.json that matches the provided id.
   * It is expected each id should be unique.
   */
  public getComponentById(id: number): Promise<any> {
    return Promise.resolve(
      this.getComponents()
        .then(
          (data) => {
            for (let item of data) {
              if (item.id === id) {
                return item;
              }
            }
          },
          (error) => { return error; }
        )
    );
  }

  /**
   * Gets first component from docs.json that matches the provideded name.
   * It is expected that each name is unique.
   */
  public getComponentByName(name: string): Promise<any> {
    return Promise.resolve(
      this.getComponents()
        .then(
          (data) => {
            for (let item of data) {
              if (item.name === name) {
                return item;
              }
            }
          },
          (error) => { return error; }
        )
    );
  }

  /**
   * Gets array of properties for a component given the component's id.
   */
  public getComponentProperties(id: number = null, name: string = null): Promise<any> {
    if (!id && !name) {
      throw new Error('Method must be supplied with component id or component name');
    }
    let loadpromise: Promise<any>;
    let promise: Promise<any>;
    
    return this.load().then( () => {
      if (id) {
        promise = this.getComponentById(id);
      }
      if (name && !id) {
        promise = this.getComponentByName(name);
      }
      return Promise.resolve(
        promise.then(
          (data) => {
            return data.children.filter((child) => {
              if (!!child.decorators &&
                  (child.decorators[0].name === 'Input' ||
                    child.decorators[0].name === 'Output')) {
                      return child;
                  }
            });
          },
          (error) => { throw new Error(error); }
        )
      )
    });
  }

  /**
   * Gets a property of a component by its id.
   */
  public getComponentPropertiesById(componentId: number, propertyId: number): Promise<any> {
    return Promise.resolve(
      this.getComponentProperties(componentId)
        .then(
          (data) => {
            data.filter((item) => {
              if (item.id === propertyId) {
                return item;
              }
            });
          },
          (error) => { return error; }
        )
      );
  }

  /**
   * Gets a property of a component by its name.
   */
  public getComponentPropertiesByName(componentId: number, name: string): Promise<any> {
    return Promise.resolve(
      this.getComponentProperties(componentId)
        .then(
          (data) => {
            data.filter((item) => {
              if (item.name === name) {
                return item;
              }
            });
          },
          (error) => { return error; }
        )
    );
  }

  public getInterfaces(): Promise<any> {
    return Promise.resolve(
      this.data.children.reduce((accum, child) => {
        // for (const kid of child.children) {
        //   if (kid.kindString === 'Interface') {
        //     accum.push(kid);
        //   }
        // }
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
  }

  public getTypes(): Promise<any> {
    return Promise.resolve(
      this.data.children.reduce((accum, child) => {
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
  }
}
