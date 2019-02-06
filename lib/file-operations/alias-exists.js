const fs = require('fs');

const { CONSTANTS } = require('../util');


/**
 * Checks if alias (shell script file) is already created in squash config
 * @param {String} alias 
 */
const aliasExists = (alias) => {
 
  if (fs.existsSync(`${CONSTANTS.ROOT_DIR}/${alias}`)) {
    return true;
  }

  return false;
};


module.exports = aliasExists;
