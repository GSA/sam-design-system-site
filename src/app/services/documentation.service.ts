import { Injectable } from '@angular/core';

import * as data from '../../../dist/docs.json';

const regexComponent = new RegExp('([^/]*\.component)');
const regexNotComponent = new RegExp('([^.component])');

@Injectable()
export class DocumentationService {

  public getNotComponents(): Promise<any> {
    return Promise.resolve(
      data.children.filter((child) => {
        
      })
    );
  }
  /**
   * Gets all components from docs.json
   */
  public getComponents(): Promise<any> {
    return Promise.resolve(
      data.children.reduce((accum, child) => {
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
    let promise: Promise<any>;
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
    );
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

  
}
