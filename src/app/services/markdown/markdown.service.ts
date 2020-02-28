import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarkdownProcessor } from './markdown-processor';
import { environment } from 'environment';

@Injectable()
export class MarkdownService {

  private processString;

  constructor(private http: HttpClient) {
    this.processString =
      new MarkdownProcessor(
        `${environment.DEPLOYURL}/assets/markdown/`
      )
      .processString;
  }

  public get (file: string) {
    return this.http.get(this.processString(file));
  }

}
