import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { MarkdownProcessor } from './markdown-processor';

@Injectable()
export class MarkdownService {

  private processString;

  constructor(private http: Http) {
    this.processString =
      new MarkdownProcessor(
        '/assets/markdown/'
      )
      .processString;
  }

  public get (file: string) {
    return this.http.get(this.processString(file));
  }

}
