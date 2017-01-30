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


var target = "src/_docs";//"src/_docs";

var recursiveReadSync = require('recursive-readdir-sync');

function getUIKitStructure(){
	var files = recursiveReadSync('./'+target);

	files = files.filter(function(val){
	  return val.match(/documentation\.md$/);// /directive\.ts|component\.ts$/
	});
	
	files = files.map(function(val){
	  var link = val.substring(0, val.lastIndexOf("/")).replace(target+'/','');
		console.log(link);
	  var section = link.split("/")[0];
	  var item = link.split("/")[1].split("-").map(function(val){
	    val = val.replace(/^\w/g, l => l.toUpperCase())
	    return val;
	  }).join(" ");//.replace(/\-/g," ");
	  var itemUnformatted = link.split("/")[1];
	  return {
	    link: link,
	    section: section,
	    item: item,
	    itemUnformatted: itemUnformatted
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
