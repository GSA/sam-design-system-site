export class MarkdownProcessor {
  public processString: (a: string) => string;

  private _changeFileExt: (a: string[]) => string[];
  private _prependAssetsDir: (a: string[]) => string[];

  constructor(private assetsDir: string, private ext: string = 'txt') {
    this._prependAssetsDir = this._setAssetsDir(assetsDir);
    this._changeFileExt = this._setFileExt(ext);

    this.processString = this.pipe(
      this._stripLeadingSlash,
      this._splitString,
      this._changeFileExt,
      this._prependAssetsDir,
      this._joinString
    );
  }

  private _stripLeadingSlash(str: string): string {
    if (typeof str !== 'string') {
      throw new TypeError('Must pass string');
    }

    return str[0] === '/' ? str.slice(1) : str;
  }

  private _splitString(str: string): string[] {
    if (typeof str !== 'string') {
      throw new TypeError('Must pass string to split');
    }

    return str.split('/');
  }

  // String -> [] -> []
  private _setFileExt(ext: string) {
    if (!ext) {
      throw new Error('Must initialize with a file extension');
    }

    // String -> String
    const processBase = this.pipe(
      this._splitBase,
      this._swapFileExt(ext),
      this._joinBase
    );

    // [] -> []
    return function (arr: string[]): string[] {
      const dir = arr.slice(0, arr.length - 1);
      const base = arr[arr.length - 1];

      const fileName = [...dir, processBase(base)].join('-');

      return [fileName];
    };
  }

  private _joinString(arr: string[]): string {
    if (!(arr instanceof Array)) {
      throw new TypeError('Must take an array');
    }

    return arr.join('');
  }

  private _splitBase(str: string): string[] {
    return str.split('.');
  }

  private _swapFileExt(ext: string) {
    const validate = this._validateFileArray;

    return function (arr: string[]): string[] {
      validate(arr);

      return [...arr.slice(0, arr.length - 1), ext];
    };
  }

  private _joinBase(arr: string[]): string {
    if (!(arr instanceof Array)) {
      throw new TypeError('Must pass array');
    }

    return arr.join('.');
  }

  private _validateFileArray(arr: string[]): void {
    if (!(arr instanceof Array)) {
      throw new TypeError('Must pass non-empty Array');
    }

    if (arr.length < 2) {
      throw new Error('Array must have length >= 2');
    } else if (arr.length === 2) {
      if (arr[0] === '') {
        throw new Error('String mut be valid file name');
      }
    }
  }

  private _setAssetsDir(root: string) {
    return function prependAssetsDir(arr: string[]): string[] {
      return [root, ...arr];
    };
  }

  private pipe(fn: Function, ...fns: Function[]) {
    return function (...args) {
      return fns.reduce((val, func) => func(val), fn(...args));
    };
  }
}
