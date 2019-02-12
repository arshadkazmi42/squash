const fs = require('fs');

const aliasExists = require('./alias-exists');
const CONSTANTS = require('../util/constants');


const commandRemove = (command) => {

  try {

    if(aliasExists(command)) {
      fs.unlinkSync(`${CONSTANTS.ROOT_DIR}/${command}`);
    } else {
      console.log(`Cannot delete, command ${command} does not exist!`);
      return false;
    }

    console.log(`Removed command ${command}`);
    console.log('\n\n==========SQUASH==========');

    return true;
  } catch (err) {
    console.error('Err! Error removing command', err);
    return;
  }
};


module.exports = commandRemove;
