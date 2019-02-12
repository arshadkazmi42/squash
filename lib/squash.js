const fs = require('fs');

const { commandCreate, commandRemove, directoryCreate } = require('./file-operations');
const { CONSTANTS, formatCommand, parseInput, parseFlags, printLogo } = require('./util');
const { validate } = require('./validations');


const squash = (args) => {

  const { alias, flags, command } = parseInput(args);

  // Print the logo
  printLogo();

  /**
   * If we're removing, do it here and then break
   */
  if(parseFlags(flags).indexOf(CONSTANTS.FLAGS.REMOVE) > -1) {
    commandRemove(command);
    return;
  }

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
