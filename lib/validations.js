const Util = require('./util');
const Flags = require('./flags');
const FileOps = require('./file-operations');

const CONSTANTS = require('./constants');
const SYSTEM_ALIAS = require('./system-alias');

const externals = {}


/**
 * Validate required data for the commands
 * 1. Operating system is not windows
 * 2. Help command
 * 3. Alias exists?
 * 4. Command missing
 * Logs the output using console.log and returns
 */
externals.validate = (alias, flag, command) => {
  if (process.platform === 'win32') {
    console.error('Err! Sorry! We do not support windows yet.');
    return true;
  }

  // if system flag, then process and return
  if (externals.validateSystemFlag(flag)) {
    return true;
  }


  // If alias is system reserved, throw error
  if (SYSTEM_ALIAS.indexOf(alias) > -1) {
    console.error(`Err! "${alias}" is system reserved name.`
      + '\nPlease choose some other alias.\n\n');
    return true;
  }

  if (!alias || alias.length === 0) {
    console.error('Err! Alias missing!!!!'
      + '\nYou should give an alias to the command using --alias flag'
      + '\nUse squash --help to get help');
    return true;
  }

  if (!command || command.length === 0) {
    console.error('Err! Command missing!!!');
    return true;
  }

  return false;
}


externals.validateSystemFlag = (flag) => {

  const parsedFlag = Flags.parseFlag(flag);
  switch (parsedFlag) {
    case CONSTANTS.FLAGS.HELP:
      Util.help();
      return true;
    case CONSTANTS.FLAGS.LIST:
      FileOps.listCommands();
      return true;
    case CONSTANTS.FLAGS.SYSTEM_ALIAS:
      Util.systemAlias(SYSTEM_ALIAS);
      return true;
  }

  return false;
}


module.exports = externals;
