// Disabling lint as this is 3rd party code for demo only
/* tslint:disable */
import {Injectable} from '@angular/core';

@Injectable()
export class SearchUtil {

  public memberIsNotNull(member: string, model: object): boolean {
    return (model.hasOwnProperty(member) && model[member] !== null);
  }

  public memberIsNull(member: string, model: object): boolean {
    return ! this.memberIsNotNull(member, model);
  }

  public memberIsString(member: string, model: object): boolean {
    return (this.memberIsNotNull(member, model) &&
    typeof model[member] === 'string');
  }

  public stringFromObject(
    member: string,
    model: object,
    defaultString: string = ''
  ): string {
    if (this.memberIsString(member, model)) {
      return model[member];
    }
    return defaultString;
  }

  public decodedUriFromObject(
    member: string,
    model: object,
    defaultString: string = ''
  ): string {
    return decodeURI(this.stringFromObject(member, model, defaultString));
  }

  public objectFromObject(member: string, model: object): object {
    if (this.memberIsNull(member, model)) {
      return {};
    }
    return JSON.parse(model[member]);
  }

  public arrayFromObject(member: string, model: object): object {
    if (this.memberIsNull(member, model)) {
      return [];
    }
    return decodeURI(model[member]).split(",");
  }

  public integerFromObject(member: string, model: object): number {
    if (this.memberIsNull(member, model)) {
      return 0;
    }
    return parseInt(model[member]);
  }

  public booleanFromObject(member: string, model: object): boolean {
    if (this.memberIsString(member, model)) {
      const bool = this.stringFromObject(member, model);
      if (bool === 'false') {
        return false;
      }
    }
    return true;
  }

}
