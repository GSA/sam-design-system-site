const path = require('path');
const fs = require('fs');

run();

function run() {
  var targetDir = path.join(__dirname, '../../dist/');
  var API_UMBRELLA_URL =
    process && process.env && process.env.API_UMBRELLA_URL
      ? process.env.API_UMBRELLA_URL
      : '';
  if (fs.existsSync(targetDir) && API_UMBRELLA_URL) {
    //console.log(targetDir,'exists');
    var someFile = path.join(targetDir, 'main.bundle.js');
    fs.readFile(someFile, 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
      var result = data.replace(/\$API_UMBRELLA_URL/g, API_UMBRELLA_URL);

      fs.writeFile(someFile, result, 'utf8', function (err) {
        if (err) return console.log(err);
      });
    });
    var someFile2 = path.join(targetDir, 'main.bundle.js.map');
    fs.readFile(someFile, 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
      var result = data.replace(/\$API_UMBRELLA_URL/g, API_UMBRELLA_URL);

      fs.writeFile(someFile2, result, 'utf8', function (err) {
        if (err) return console.log(err);
      });
    });
  }
}
