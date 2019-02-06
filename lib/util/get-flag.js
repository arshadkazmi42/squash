const CONSTANTS = require('./constants');


const getFlag = (param) => {
  if (param.startsWith(CONSTANTS.ALIAS)) {
    return CONSTANTS.ALIAS;
  }

  if (param.startsWith(CONSTANTS.HELP)) {
    return CONSTANTS.HELP;
  }

  return param;
};


module.exports = getFlag;
