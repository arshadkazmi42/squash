const Util = require('./util');

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
    console.log("Sorry! We do not support windows yet.");
    return true;
  }

  if (Util.isHelp(flag)) {
    Util.help();
    return true;
  }

  if (!alias || alias.length === 0) {
    console.error("Alias missing!!!!"
      + "\nYou should give an alias to the command using --alias flag"
      + "\nUse squash --help to get help");
    return true;
  }

  if (!command || command.length === 0) {
    console.error("Command missing!!!");
    return true;
  }

  return false;
}

module.exports = externals;