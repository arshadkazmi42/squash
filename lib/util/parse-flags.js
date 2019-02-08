const CONSTANTS = require('./constants');


const parseFlags = (flags) => {
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
      case CONSTANTS.PASS_ARGS:
        parsedFlags.push(CONSTANTS.FLAGS.PASS_ARGS);
        break;
      case CONSTANTS.VERSION:
        parsedFlags.push(CONSTANTS.FLAGS.VERSION);
        break;
    }
  }
  return parsedFlags;
};


module.exports = parseFlags;
