const fs = require('fs');

const CONSTANTS = require('./contants');

const externals = {};


externals.parserInput = (inputArgs) => {
  let flag = '';
  let alias = '';
  let command = [];
  for (let i = 0; i < inputArgs.length; i++) {
    param = externals.getFlag(inputArgs[i]);
    switch (param.toLowerCase()) {
      case CONSTANTS.ALIAS:
        alias = inputArgs[i].replace(CONSTANTS.ALIAS, '')
        flag = param;
        break;
      case CONSTANTS.LIST:
      case CONSTANTS.HELP:
        flag = param;
        break;
      default:
        command.push(param)
        break;
    }
  }

  // Forming command from array
  command = command.join(' ')

  return { alias, flag, command };
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
  console.log('\t--alias\t :  \tAdds the alias for the command, this will be treated as name for that command');
  console.log('\t--list\t :  \tLists all the commands which are saved using squash');
  console.log('\t--help\t :  \tShow details of Squash');
  console.log('\n');
  console.log('Note: Provide absolute path of the files/directory, if the commands uses any file/directory from your system');
  console.log('\n\n');
  return;
}


module.exports = externals