import { SamTitleService } from './title.service';
import { Title } from '@angular/platform-browser';
import { mappings } from './mappings';

class Mock extends Title {
  private _currentTitle = 'mock';
  constructor() {
    super('test');
  }

  public getTitle(): string {
    return this._currentTitle;
  }

  public setTitle(title: string): void {
    this._currentTitle = title;
  }
}

describe('The Sam Title Service', () => {
  let service: SamTitleService;

  beforeEach(() => {
    service = new SamTitleService(new Mock());
  });

  it('should set the title based on route', () => {
    service.setTitle('/docs/overview/contribute');
    const actual = service.getTitle();
    const expected = 'SAM Design System | How To Contribute';

    expect(actual).toEqual(expected);
  });

  it('should add base to title when title is present', () => {
    const actual = service.buildTitle(service._titleTemplate, 'Djibouti');
    const expected = `${service._titleTemplate} | Djibouti`;

    expect(actual).toEqual(expected);
  });

  it('should set title to base if no title is provided', () => {
    const actual = service.buildTitle(service._titleTemplate, undefined);
    const expected = service._titleTemplate;

    expect(actual).toEqual(expected);
  });

  it('should set an arbitrary title', () => {
    service.setTitleString('hello');
    const actual = service.getTitle();
    const expected = `${service._titleTemplate} | hello`;
  });
});
