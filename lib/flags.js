const CONSTANTS = require('./constants');

const externals = {}


externals.parseFlags = (flags) => {
  let parsedFlags = [];
  for (let i in flags) {
    switch (flags[i]) {
      case CONSTANTS.HELP:
        parsedFlags.push(CONSTANTS.FLAGS.HELP);
        break;
      case CONSTANTS.LIST:
        parsedFlags.push(CONSTANTS.FLAGS.LIST);
        break;
      case CONSTANTS.SYSTEM_ALIAS:
        parsedFlags.push(CONSTANTS.FLAGS.SYSTEM_ALIAS);
        break;
    }
  }
  return parsedFlags;
}


module.exports = externals;
