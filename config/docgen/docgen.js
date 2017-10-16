const fs = require('fs');
const path = require('path');
const root = require('../helpers').root();
const rxjs = require('rxjs');
const Observable = rxjs.Observable;

const stream = require('stream');
const util = require('util');

/**
 * Add componets that you don't want to be added to the site.
 * Most of these are helper or child components that shouldn't
 * be exposed to developers.
 */
const ignoredComponents = [
  'SamAccordionSection',
  'SamCommentComponent',
  'SamMenuItemComponent',
  'SidenavService',
  'SamTabComponent'
]

function ObservableStream (observer, path) {
  this.path = path;
  this.observer = observer;
  this.count = 0;
  this.fileName = this.path.split('/').pop();
  stream.Writable.call(this);
};

util.inherits(ObservableStream, stream.Writable);

ObservableStream.prototype._write = function (chunk, encoding, done) {
  const contents = chunk.toString();

  const componentRegex = new RegExp(/(?=@Component)(?:[^\}]*selector[^:]*:[^A-Za-z]*)([A-Za-z-]*)(?:[\s\S]*)(?:export\s+class\s)(\w+)*/g);
  const directiveRegex = new RegExp(/(?=@Directive)(?:[^\}]*selector[^:]*:[^A-Za-z]*)([A-Za-z-]*)(?:[\s\S]*)(?:export\s+class\s)(\w+)*/g);
  const pipeRegex = new RegExp(/(?=@Pipe)(?:[^\}]*selector[^:]*:[^A-Za-z]*)([A-Za-z-]*)(?:[\s\S]*)(?:export\s+class\s)(\w+)*/g);
  const uiKitRegex = new RegExp(/(?:\/ui-kit\/)(.*)/g);
  const docsRegex = new RegExp(/(?:_docs\/)/g);

  let regex;

  if (this.fileName.includes('component')) {
    regex = componentRegex.exec(contents);
  } else if (this.fileName.includes('directive')) {
    regex = directiveRegex.exec(contents);
  } else if (this.fileName.includes('pipe')) {
    regex = pipeRegex.exec(contents);
  }

  const returnObj = {};
  let uiKitPath = uiKitRegex.exec(this.path.toString());
  let docsPath = docsRegex.exec(this.path);
  if (uiKitPath) {
    returnObj.path = uiKitPath[1];
  } else if (docsPath) {
    returnObj.path = docsPath[1]
  } else {
    returnObj.path = this.path;
  }
  
  returnObj.fileName = this.fileName;
  if (regex) {
    returnObj.selector = regex[1];
    returnObj.component = regex[2];
  }
  if (isAcceptableFileName(returnObj.fileName)) {
    this.observer.next(returnObj);
  }
}

function isAcceptableFileName(fileName) {
  if (fileName.includes('.directive.ts') ||
      fileName.includes('.component.ts') ||
      fileName.includes('.pipe.ts')) {
    return true;
  } else {
    return false;
  }
}

const uiKitDir = path.resolve(__dirname + '/../../sam-ui-elements/src/ui-kit');
const docsDir = path.resolve(__dirname + '/../../src/_docs');

function generateObs(dir) {
  return Observable.create((observer) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        observer.error(err);
      };
      files.forEach((file, index) => {
        let newPath = path.resolve(dir, file);
        observer.next(newPath);
      });
    });
  })
  .flatMap((file) => {
    let stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      return generateObs(file);
    } else {
        return Observable.create((observer) => {
          const writeStream = new ObservableStream(observer, file);
          const readStream = fs.createReadStream(file);

          readStream.on('open', () => {
            readStream.pipe(writeStream, 'utf-8', (err, data) => {});
          });
        });
    }
  })
}

let dirStream = 
  generateObs(uiKitDir)

let docStream = 
  generateObs(docsDir)

dirStream
  .merge(docStream)
  .subscribe(
    (fileObj) => {
      if (!fileObj) return;

      /**
       * If ignored file, exit
       */
      if (ignoredComponents.indexOf(fileObj.component) !== -1) return;

      /**
       * If layout, exit (need more support to support layout examples)
       */
      if ( fileObj &&
           fileObj.path &&
           (fileObj.path.includes('layout') ||
           fileObj.path.includes('pipes'))) { 
             return;
           }

      generateDirsInPath(fileObj.path, (err) => {
        if (err) return;
        let paths = fileObj.path.split('/');
        paths = paths.slice(0, paths.length - 1);
        let filePath = paths.join('/');
        let componentFileName = path.resolve(docsDir, filePath + '/component-example.ts');
        let markdownFileName = path.resolve(docsDir, filePath + '/documentation.md');
        // Create markdown file
        createFile(markdownFileName, ('# ' + fileObj.component), (err) => console.error(err));
        // Create component file
        createFile(componentFileName, generateComponentStub(fileObj), (err) => console.error(err));
      });
    },
    err => console.error(err)
  );

function createFile(path, content, callback) {
  fs.readFile(path, (err, data) => {
    if (err) {
      fs.writeFile(path, content, (err) => {
        if (err) {
          callback(err)
        } else {
          callback(null);
        }
      });
    }
  })
  callback();
}

function generateDirsInPath(filePath, callback) {
  if (!filePath) return;

  let paths = filePath.split('/');
  paths = paths.slice(0, paths.length - 1);
  let currentPath = path.resolve(docsDir);

  while(paths.length > 0) {
    let next = paths.shift();
    if (next) {
      currentPath += path.resolve(currentPath, '/' + next);
    }
    try {
      let readResult = fs.readdirSync(currentPath);
    } catch (err) {
      try {
        let mkDirResult = fs.mkdirSync(currentPath);
      } catch(err) {
        callback(err);
      }
    }
  }
  callback();
}


function generateComponentStub(fileObj) {
  const selector = fileObj.selector || '';
  const component = fileObj.component || '';
  return `
import {
  Component,
  OnInit,
  Input,
  ComponentRef,
  ViewChild,
  ViewRef,
  TemplateRef,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

//tabs/spacing matters for code example block
var code_example = \`TODO\`;

@Component({
  selector: 'doc-${selector}',
  template: '<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">' + code_example + '</doc-template>'
})
export class ${component}ExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "${component}";
  typedoc_content = "";
  markdown = require("html-loader!markdown-it-loader!./documentation.md");
  example = code_example;
}`
}

function generateTitle(title) {
  return title
    .replace(/-/, ' ')
    .split(' ')
    .map((word) => {
      return word
              .charAt(0)
              .toUpperCase()
              .concat(word.slice(1))
    })
    .join(' ');
}

function writeFileCallback(err) {
  if (err) {
    console.error(err);
  }
}