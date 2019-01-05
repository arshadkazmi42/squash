const CONSTANTS = require('./contants');

const externals = {}


externals.parseFlag = (flag) => {
  switch (flag) {
    case CONSTANTS.HELP:
      return CONSTANTS.FLAGS.HELP;
    case CONSTANTS.LIST:
      return CONSTANTS.FLAGS.LIST;
  }
}


module.exports = externals;
