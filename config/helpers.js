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
  var regex = /documentation\.md$/;
  var files = recursiveReadSync('./'+target);

	files = files.filter(function(val){
	  return val.match(regex);
	});
	
	files = files.map(function(val){
	  var link = val.substring(0, val.lastIndexOf("/")).replace(target+'/','');
		//console.log(link);
	  var section = link.split("/")[0].split("-").map(function(val){
	    val = val.replace(/^\w/g, l => l.toUpperCase())
	    return val;
	  }).join(" ");
	  var item = link.split("/")[1].split("-").map(function(val){
	    val = val.replace(/^\w/g, l => l.toUpperCase())
	    return val;
	  }).join(" ");
	  return {
	    link: link,
	    section: section,
	    item: item
	  };
  });
  return files;
}
function getStaticDirStructure(){
  var target = "src/_static";
  var regex = /\.md$/;
  var files = recursiveReadSync('./'+target);

	files = files.filter(function(val){
	  return val.match(regex);
	});
	files = files.map(function(val){
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
  //console.log(files);
  return files;
}

var root = path.join.bind(path, ROOT);

exports.hasProcessFlag = hasProcessFlag;
exports.hasNpmFlag = hasNpmFlag;
exports.isWebpackDevServer = isWebpackDevServer;
exports.root = root;
exports.getUIKitStructure = getUIKitStructure;
exports.getStaticDirStructure = getStaticDirStructure;
