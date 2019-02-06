// Importing all file operation utils
const { 
  aliasExists,
  commandCreate,
  commandsList,
  directoryCreate
} = require('./file-operations');

// Importing all utils
const {
  CONSTANTS,
  getFlag,
  formatCommand,
  parseInput,
  parseFlags,
  printLogo,
  systemAlias
} = require('./util');


// Exporting all utilities
module.exports = {
  aliasExists,
  commandCreate,
  commandsList,
  CONSTANTS,
  directoryCreate,
  getFlag,
  formatCommand,
  parseInput,
  parseFlags,
  printLogo,
  systemAlias
};
