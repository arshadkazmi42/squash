const CONSTANTS = require('./constants');


const formatCommand = (command, flags) => {
  let formatedCommand = command;
  for (let i in flags) {
    switch (flags[i]) {
      case CONSTANTS.PASS_ARGS:
        formatedCommand = `${command} "$@"`;
        break;
    }
  }
  return formatedCommand;
};


module.exports = formatCommand;