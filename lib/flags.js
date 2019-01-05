const CONSTANTS = require('./constants');

const externals = {}


externals.parseFlag = (flag) => {
  switch (flag) {
    case CONSTANTS.HELP:
      return CONSTANTS.FLAGS.HELP;
    case CONSTANTS.LIST:
      return CONSTANTS.FLAGS.LIST;
    case CONSTANTS.SYSTEM_ALIAS:
      return CONSTANTS.FLAGS.SYSTEM_ALIAS;
  }
}


module.exports = externals;
