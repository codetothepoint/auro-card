const fs = require('fs');
const bundle = 'auro-card__bundled.js';
const bundleBanner = 'auro-banner__bundled.js';
const indexFile = './build/index.html';
const indexFileBanner = './build/banner.html';

// File destination.txt will be created or overwritten by default.
let copyFiles = async function() {

  fs.copyFile(`./demo/css/style.css`, `./build/css/style.css`, (err) => {
    if (err) throw err;
    console.log(`CSS was copied to ./build dir`);
  });
}

// Edit string in new index.html file
fs.readFile(indexFile, 'utf8', function (err,data) {
  copyFiles();

  if (err) {
    return console.log(err);
  }

  const element = data.replace(`../src/auro-card.js`, `auro-card__bundled.js`);

  fs.writeFile(indexFile, element, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});

// Edit string in new index.html file
fs.readFile(indexFileBanner, 'utf8', function (err,data) {
  copyFiles();

  if (err) {
    return console.log(err);
  }

  const element = data.replace(`../src/auro-banner.js`, `auro-banner__bundled.js`);

  fs.writeFile(indexFileBanner, element, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
