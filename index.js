#!/usr/bin/env node

const squash = require('./lib/squash');


const [, , ...args] = process.argv;


// Squash the command
squash(args);
