const fs = require('fs');

const CONSTANTS = require('./contants');

const externals = {};

externals.createCommand = (alias, command) => {
  fs.writeFile(`${CONSTANTS.ROOT_DIR}/${alias}`, command, "utf8", (err) => {
    if (err) {
      console.log("Error generating command", err);
      return;
    }
  
    console.log("The file was succesfully saved!");
  
    fs.chmodSync(`/usr/local/squash/${alias}`, '755');
  
    console.log(`Permission Granted to ${alias}`);
    console.log('\n\n==========SQUASH==========');
    console.log(`\nYou command\n>>> ${alias} <<<\nis read to use\n`)
    console.log("==========SQUASH==========\n\n");
  });
}

module.exports = externals;
