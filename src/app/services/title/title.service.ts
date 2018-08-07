import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { pipe } from '@gsa-sam/sam-ui-elements';
import { mappings } from './mappings';

@Injectable()
export class SamTitleService {
  public _titleTemplate: string = 'SAM Design System';

  constructor(private ngTitleService: Title) {}

  public setTitleString(postFix): void {
    const t = `${this._titleTemplate} | ${postFix}`;
    this.ngTitleService.setTitle(t);
  }

  public setTitle(route: string): void {

    const processed = pipe(
      this._removeParameters,
      this._removeFragments,
      this._processNumbers
    )(route);

    return this.ngTitleService
      .setTitle(
        this.buildTitle(
          this._titleTemplate,
          mappings[processed]
        )
      );
  }

  public getTitle(): string {
    return this.ngTitleService.getTitle();
  }

  public buildTitle (defaultStr: string, appendedStr: string): string {
    return appendedStr
      ? `${defaultStr} | ${appendedStr}`
      : defaultStr;
  }

  private _removeParameters (route: string): string {
    const paramIndex = route.indexOf('?');
    return paramIndex !== -1
      ? route.slice(0, paramIndex)
      : route;

  }

  private _removeFragments (route: string): string  {
    const fragmentIndex = route.indexOf('#');
    return fragmentIndex !== -1
      ? route.slice(0, fragmentIndex)
      : route;
  }

  private _processNumbers (route: string): string {
    return route.replace(/(\/[0-9]+)$/, '');
  }
}
