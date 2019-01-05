const fs = require('fs');

const Util = require('./util');
const Valdiations = require('./validations');
const FileOps = require('./file-operations');

const CONSTANTS = require('./contants');

const squash = (args) => {

  const { alias, flag, command } = Util.parserInput(args);

  // Print the logo
  Util.printLogo();

  /**
   * If some case passed in validation.
   * Break the flow
   */
  if (Valdiations.validate(alias, flag, command)) {
    return;
  }

  /**
   * Check if directory exists
   * If directory does not exists then create new
   */
  if (!fs.existsSync(CONSTANTS.ROOT_DIR)) {
    Util.createDirectory();
  }

  FileOps.createCommand(alias, command);
}


module.exports = squash;
