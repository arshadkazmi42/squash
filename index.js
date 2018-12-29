#!/usr/bin/env node

const fs = require('fs');

const Util = require('./lib/util');
const Valdiations = require('./lib/validations');
const FileOps = require('./lib/file-operations');

const CONSTANTS = require('./lib/contants');


const [, , ...args] = process.argv;
const { alias, flag, command } = Util.parserInput(args);


// Print the logo
Util.printLogo();


/**
 * If some case passed in validation.
 * Break the flow
 */
if (Valdiations.validate(alias, flag, command)) {
  return;
}


/**
 * Check if directory exists
 * If directory does not exists then create new
 */
if (!fs.existsSync(CONSTANTS.ROOT_DIR)) {
  Util.createDirectory();
}

FileOps.createCommand(alias, command);