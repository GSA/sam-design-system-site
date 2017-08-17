const fs = require('fs');
const resolve = require('path').resolve;

/**
 * @author: @AngularClass
 */
var path = require('path');

const EVENT = process.env.npm_lifecycle_event || '';

// Helper functions
var ROOT = path.resolve(__dirname, '..');

function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1;
}

function hasNpmFlag(flag) {
  return EVENT.includes(flag);
}

function isWebpackDevServer() {
  return process.argv[1] && !! (/webpack-dev-server/.exec(process.argv[1]));
}



var recursiveReadSync = require('recursive-readdir-sync');

function getUIKitStructure(){
  var target = "src/_docs";
	let docFiles = recursiveReadSync('./' + target);	
	
	let filteredFiles = docFiles.filter((val) => {
		let reg = new RegExp(/component-example\.ts$/g);
		return reg.exec(val);
	});

	let mapped = filteredFiles.map((val) => {
		let file = fs.readFileSync(resolve(val));
		let component;
		let itemIndex = 1;
		if (file) {
			const componentRegex = new RegExp(/(?=@Component)(?:[^\}]*selector[^:]*:[^A-Za-z]*)([A-Za-z-]*)(?:[\s\S]*)(?:export\s+class\s)(\w+)*/g);
			let results = componentRegex.exec(file);
			if (results) {
				component = results[2];
			}
		}
		val = val.replace(/\\\\/g,"/");
		val = val.replace(/\\/g,"/");
		var link = val.substring(0, val.lastIndexOf("/")).replace(target+'/','');
		const linkArr = link.split('/');
	  var section = linkArr[0].split("-").map(function(val){
	    val = val.replace(/^\w/g, l => l.toUpperCase())
	    return val;
		}).join(" ");
		let subsection;
		if (linkArr.length > 2) {
			itemIndex = 2;
			subsection =
				linkArr[1]
				.split('-')
				.map((val) => {
					return val.replace(/^\w/g, l => l.toUpperCase());
				})
				.join(' ');
		}
		item = link.split("/")[itemIndex].split("-").map(function(val){
	    val = val.replace(/^\w/g, l => l.toUpperCase())
	    return val;
	  }).join(" ");
	  return {
	    link: link,
	    section: section,
			item: item,
			component: component,
			subsection: subsection
	  };
	})

  return mapped;
}

function getStaticDirStructure(){
  var target = "src/_static";
  var regex = /\.md$/;
  var files = recursiveReadSync('./'+target);

	files = files.filter(function(val){
	  return val.match(regex);
	});
	files = files.map(function(val){
		val = val.replace(/\\\\/g,"/");
		val = val.replace(/\\/g,"/");
    var filename = val.replace(target,"");
	  var link = filename.substring(1).replace(/\.md$/,"").toLowerCase().replace(/\s/g,"-");
	  var section = link.substring(0,link.indexOf("/")).split("-").map(function(val){
	    val = val.replace(/^\w/g, l => l.toUpperCase())
	    return val;
	  }).join(" ");
	  var item = link.substring(link.lastIndexOf("/")+1).split("-").map(function(val){
	    val = val.replace(/^\w/g, l => l.toUpperCase())
	    return val;
	  }).join(" ");
	  return {
      file: val,
      link: link,
	    section: section,
	    item: item
	  };
	});
	
  return files;
}

var root = path.join.bind(path, ROOT);

exports.hasProcessFlag = hasProcessFlag;
exports.hasNpmFlag = hasNpmFlag;
exports.isWebpackDevServer = isWebpackDevServer;
exports.root = root;
exports.getUIKitStructure = getUIKitStructure;
exports.getStaticDirStructure = getStaticDirStructure;

function generateModuleString() {
	let files = getUIKitStructure();
	let imports = files.reduce((prev, curr) => {
		return prev.concat(`import { ${curr.component} } from "./${curr.link}/component-example";\n`);
	}, '');
	let declarations = files.map((file) => '\n\t\t' + file.component);
	let otherDeclarations = ['InterfacesComponent', 'DocTemplateComponent', 'BaseExampleComponent', 'PlaceHolderExampleComponent', 'SimpleExampleComponent'];
	otherDeclarations.forEach((declaration) => {
		declarations.push(declaration);
	});
	return `
/******************************************************/
/* File generated in ../config/helpers.js             */
/******************************************************/
// Angular Dependencies
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BaseExampleComponent } from "./baseexample.component";
import { PlaceHolderExampleComponent } from "./placeholder.component";
import { SimpleExampleComponent } from "./simple.component";

${imports}

import { DocTemplateComponent } from "./doc.template";
import { routing } from "./doc.routes.dynamic";

import { SamUIKitModule } from '../../sam-ui-elements/src/ui-kit';
import { TestService } from "./components/alphabet-selector/component-example";
import { InterfacesComponent } from './data-structures/interfaces/interfaces.component';


/**
 * \AppModule\` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
	providers: [TestService],
	declarations: [${declarations}\n\t],
	entryComponents: [${declarations}\n\t],
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		SamUIKitModule,
		routing
	],
	exports: [BaseExampleComponent]
})
export class DocModule { }\n`
}


function writeModuleFile() {
	let path = 'src/_docs/doc.module.dynamic.ts';
	fs.writeFile(resolve(path), generateModuleString(), (err) => {
		if (err) console.log(err);
	})
}
writeModuleFile();

function generateRoutesString() {
	let files = getUIKitStructure();
	let imports = files.reduce((prev, curr) => {
		return prev.concat(`import { ${curr.component} } from "./${curr.link}/component-example";\n`);
	}, '');
	let routes = files.reduce((prev, curr) => {
		return prev.concat(
			`\n\t{ path: '${curr.link}', component: ${curr.component} },`
		)
	}, '');
	return `
/******************************************************/
/* File generated in ../config/helpers.js             */
/******************************************************/
import { Routes, RouterModule } from '@angular/router';

import { PlaceHolderExampleComponent } from "./placeholder.component";
import { SimpleExampleComponent } from "./simple.component";

${imports}

export const ROUTES: Routes = [
	${routes}
];
export const routing = RouterModule.forChild(ROUTES);
\n`
}

function writeRoutesFile() {
	let path = 'src/_docs/doc.routes.dynamic.ts';
	fs.writeFile(resolve(path), generateRoutesString(), (err) => {
		if (err) console.log(err);
	})
}

writeRoutesFile();