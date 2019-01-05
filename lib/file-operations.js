const fs = require('fs');

const CONSTANTS = require('./constants');

const externals = {};

externals.createCommand = (alias, command) => {
  fs.writeFile(`${CONSTANTS.ROOT_DIR}/${alias}`, command, 'utf8', (err) => {
    if (err) {
      console.log('Error generating command', err);
      return;
    }
  
    console.log('The file was succesfully saved!');
  
    fs.chmodSync(`/usr/local/squash/${alias}`, '755');
  
    console.log(`Permission Granted to ${alias}`);
    console.log('\n\n==========SQUASH==========');
    console.log(`\nYour command\n>>> ${alias} <<<\nis ready to use\n`)
    console.log('==========SQUASH==========\n\n');
  });
}

externals.listCommands = () => {
  console.log('Alias -> Command');
  console.log("================\n");
  fs.readdir(CONSTANTS.ROOT_DIR, function(err, filenames) {
    if (err) {
      console.log('Error reading files', err);
      return;
    }
    filenames.forEach( async (filename) => {
      fs.readFile(`${CONSTANTS.ROOT_DIR}/${filename}`, 'utf-8', function(err, content) {
        if (err) {
          console.log('Error', err);
          return;
        }
        console.log(`${filename}  ->  ${content}\n`);
      });
    });
  });
}

module.exports = externals;
