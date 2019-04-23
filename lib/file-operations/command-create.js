const fs = require('fs');

const CONSTANTS = require('../util/constants');


const commandCreate = (alias, command) => {

  try {
    // Add signature comment at first line (needed for the list command)
    let content = `# ${CONSTANTS.SIGNATURE}\n${command}`;

    // Create a sh file with the input command
    fs.writeFileSync(`${CONSTANTS.ROOT_DIR}/${alias}`, content, 'utf8');
    console.log('The file was succesfully saved!');

    // Giving executable permission to the file
    fs.chmodSync(`${CONSTANTS.ROOT_DIR}/${alias}`, '755');

    // Logging Success Message
    console.log(`Permission Granted to ${alias}`);
    console.log('\n\n==========SQUASH==========');
    console.log(`\nYour command\n>>> ${alias} <<<\nis ready to use\n`);
    console.log('==========SQUASH==========\n\n');

  } catch (err) {
    console.error('Err! Error generating command', err);
    return;
  }
};


module.exports = commandCreate;
