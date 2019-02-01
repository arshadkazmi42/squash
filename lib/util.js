const fs = require('fs');

const CONSTANTS = require('./constants');
const HELP_DATA = require('../data/help');

const externals = {};


externals.parserInput = (inputArgs) => {
  let flags = [];
  let alias = '';
  let command = [];
  for (let i = 0; i < inputArgs.length; i++) {
    param = externals.getFlag(inputArgs[i]);
    switch (param.toLowerCase()) {
      case CONSTANTS.ALIAS:
        alias = inputArgs[i].replace(CONSTANTS.ALIAS, '')
        flags.push(param);
        break;
      case CONSTANTS.PASS_ARGS:
      case CONSTANTS.LIST:
      case CONSTANTS.HELP:
        flags.push(param);
        break;
      case CONSTANTS.SYSTEM_ALIAS:
        flags.push(param);
        break;
      default:
        command.push(param)
        break;
    }
  }

  // Forming command from array
  command = command.join(' ')

  return { alias, flags, command };
}


externals.getFlag = (param) => {
  if (param.startsWith(CONSTANTS.ALIAS)) {
    return CONSTANTS.ALIAS;
  }

  if (param.startsWith(CONSTANTS.HELP)) {
    return CONSTANTS.HELP;
  }

  return param;
}


externals.createDirectory = () => {
  console.log('Directory does not exist!!!')
  console.log('Creating Directory....')

  fs.mkdirSync(CONSTANTS.ROOT_DIR);

  console.log('Directory created!!!')
}


externals.printLogo = () => {
  console.log('\n');
  console.log('#########################################################################################');
  console.log('####       ######        #####  ########  #####        ########        ####  ########  ##');
  console.log('###  ###########  ######  ####  ########  ####  ######  #####  ############  ########  ##');
  console.log('##  ###########  ########  ###  ########  ###  ########  ###  #############  ########  ##');
  console.log('###  ##########  ########  ###  ########  ###  ########  ####  ############  ########  ##');
  console.log('####       ####  ########  ###  ########  ###  ########  #####         ####            ##');
  console.log('#########   ###  ########  ###  ########  ###            ############  ####  ########  ##');
  console.log('##########  ####  ######  ####  ########  ###  ########  #############  ###  ########  ##');
  console.log('#########  ######       #######  ######  ####  ########  ############  ####  ########  ##');
  console.log('###       #############  ########      ######  ########  ####        ######  ########  ##');
  console.log('#########################################################################################');
  console.log('\n');
}


externals.help = () => {
  console.log('\n\n');
  console.log('Usage:');
  console.log('\tsquash {{command}} {{input flags}}');
  console.log('\n');
  console.log('Flags:');

  // Printing all the flags from help data
  for (let i=0;i<HELP_DATA.length;i++) {

    console.log(`\t${HELP_DATA[i].flag}\t :  \t${HELP_DATA[i].description}`);
  }

  console.log('\n');
  console.log('Notes');
  console.log(' ✔ Provide absolute path of the files/directory, if the commands uses any file/directory from your system');
  console.log(' ✔ Wrap the command in double quotes (""), if command comprises of spaces or special characters');
  console.log('\n\n');
  return;
}


externals.systemAlias = (systemAlias) => {
  const totalCommandsInOneLine = 20;
  console.log('List of all system reserved alias.\n');
  let printData = [];
  for (let i = 0; i < systemAlias.length; i++) {
    printData.push(systemAlias[i]);
    if (printData.length === totalCommandsInOneLine) {
      console.log(printData.join(", "))
      printData = [];
    }
  }
}

externals.formatCommand = (command, flags) => {
  let formatedCommand = command;
  for (let i in flags) {
    switch (flags[i]) {
      case CONSTANTS.PASS_ARGS:
        formatedCommand = `${command} "$@"`;
        break;
    }
  }
  return formatedCommand;
}

module.exports = externals
