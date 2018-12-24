const CONSTANTS = require('./contants')

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
            case CONSTANTS.HELP:
                flag = param;
                break;
            default:
                command.push(param)
                break;
        }
    }
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


externals.isHelp = (flag) => {
    return flag === CONSTANTS.HELP;
}


externals.help = () => {
    console.log("\n\n");
    console.log("Usage:");
    console.log("\tsquash {{command}} {{input flags}}");
    console.log("\n");
    console.log("Flags:");
    console.log("\t--alias\t :  \tAdd the alias for the command, this will be treated as name for that command");
    console.log("\t--help\t :  \tShow details of Squash");
    console.log("\n");
    console.log("Note: Provide absolute path of the files/directory, if the commands uses any file/directory from your system");
    console.log("\n\n");
    return;
}



module.exports = externals