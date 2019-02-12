const getFlag = require('./get-flag');
const CONSTANTS = require('./constants');


const parseInput = (inputArgs) => {
  let flags = [];
  let alias = '';
  let command = [];
  for (let i = 0; i < inputArgs.length; i++) {
    const param = getFlag(inputArgs[i]);
    switch (param.toLowerCase()) {
      case CONSTANTS.ALIAS:
        alias = inputArgs[i].replace(CONSTANTS.ALIAS, '');
        flags.push(param);
        break;
      case CONSTANTS.VERSION:
      case CONSTANTS.PASS_ARGS:
      case CONSTANTS.LIST:
      case CONSTANTS.REMOVE:
        flags.push(param);
        break;
      case CONSTANTS.HELP:
        flags.push(param);
        break;
      case CONSTANTS.SYSTEM_ALIAS:
        flags.push(param);
        break;
      default:
        command.push(param);
        break;
    }
  }

  // Forming command from array
  command = command.join(' ');

  return { alias, flags, command };
};


module.exports = parseInput;
