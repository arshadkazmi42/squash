const validateSystemFlag = require('./validate-system-flag');
const { aliasExists } = require('../file-operations');

const { SYSTEM_ALIAS } = require('../../data');


/**
 * Validate required data for the commands
 * 1. Operating system is not windows
 * 2. Help command
 * 3. Alias exists?
 * 4. Command missing
 * Logs the output using console.log and returns
 */
const validate = (alias, flags, command) => {
  if (process.platform === 'win32') {
    console.error('Err! Sorry! We do not support windows yet.');
    return true;
  }

  // if system flag, then process and return
  if (validateSystemFlag(flags)) {
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

  // If alias alredy exists, throw error
  if (aliasExists(alias)) {
    console.error(`Err! alias ${alias} alredy exists`);
    return true;
  }

  return false;
};


module.exports = validate;
