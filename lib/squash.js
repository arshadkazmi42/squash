const fs = require('fs');

const { commandCreate, directoryCreate } = require('./file-operations');
const { CONSTANTS, formatCommand, parseInput, printLogo } = require('./util');
const { validate } = require('./validations');


const squash = (args) => {

  const { alias, flags, command } = parseInput(args);

  // Print the logo
  printLogo();

  /**
   * If some case passed in validation.
   * Break the flow
   */
  if (validate(alias, flags, command)) {
    return;
  }

  /**
   * Check if directory exists
   * If directory does not exists then create new
   */
  if (!fs.existsSync(CONSTANTS.ROOT_DIR)) {
    directoryCreate();
  }

  commandCreate(alias, formatCommand(command, flags));
};


module.exports = squash;
