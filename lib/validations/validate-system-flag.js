const { commandsList } = require('../file-operations');
const {
  CONSTANTS,
  help,
  parseFlags,
  systemAlias
} = require('../util');

const { SYSTEM_ALIAS } = require('../../data');


const validateSystemFlag = (flags) => {

  const parsedFlags = parseFlags(flags);
  for (let i in parsedFlags) {
    switch (parsedFlags[i]) {
      case CONSTANTS.FLAGS.HELP:
        help();
        return true;
      case CONSTANTS.FLAGS.LIST:
        commandsList();
        return true;
      case CONSTANTS.FLAGS.SYSTEM_ALIAS:
        systemAlias(SYSTEM_ALIAS);
        return true;
    }
  }
  return false;
};


module.exports = validateSystemFlag;
