const fs = require('fs');

const Util = require('./util');
const Valdiations = require('./validations');
const FileOps = require('./file-operations');
const Flags = require('./flags');

const CONSTANTS = require('./constants');

const squash = (args) => {

  const { alias, flags, command } = Util.parserInput(args);

  // Print the logo
  Util.printLogo();

  /**
   * If some case passed in validation.
   * Break the flow
   */
  if (Valdiations.validate(alias, flags, command)) {
    return;
  }

  /**
   * Check if directory exists
   * If directory does not exists then create new
   */
  if (!fs.existsSync(CONSTANTS.ROOT_DIR)) {
    Util.createDirectory();
  }

  FileOps.createCommand(alias, Util.formatCommand(command, flags));
}


module.exports = squash;
