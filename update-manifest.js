const fs = require('fs');
const manifest = require('./src/manifest.json');
const pkg = require('./package.json');

manifest.versionName = pkg.version;
manifest.versionCode = (
  Number.parseInt(manifest.versionCode, 10) + 1
).toString();

fs.writeFileSync('./src/manifest.json', `${JSON.stringify(manifest)}\n`);
