#!/usr/bin/env node

const Util = require('./lib/util');

const [,, ...args] = process.argv;

const { alias, flag, command } = Util.parserInput(args);

// If help flag is given as input, log details and return
if (Util.isHelp(flag)) {
    return Util.help();
}

if (!alias || alias.length === 0) {
    console.error("Alias missing. You should give an alias to the command using --alias flag");
    return;
}

if (!command || command.length === 0) {
    console.error("Command missing!!!")
    return;
}

console.log("Command is -->", command.join(' '));
console.log("Alias is -->", alias);