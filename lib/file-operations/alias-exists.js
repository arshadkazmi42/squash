const fs = require('fs');

const { CONSTANTS } = require('../util');

/**
 * Checks if alias (shell script file) is already created in squash config
 * @param {String} alias 
 */

const aliasExists = (alias) => {
  return fs.existsSync(`${CONSTANTS.ROOT_DIR}/${alias}`)
};

module.exports = aliasExists;
