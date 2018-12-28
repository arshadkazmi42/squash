#!/usr/bin/env node

const { exec } = require('child_process');

const Util = require('./lib/util');

const [, , ...args] = process.argv;
const { alias, flag, command } = Util.parserInput(args);

if (process.platform === 'win32') {
  console.log("Sorry! We do not support windows yet.");
  return;
}

// If help flag is given as input, log details and return
if (Util.isHelp(flag)) {
  return Util.help();
}

if (!alias || alias.length === 0) {
  console.error("Alias missing. You should give an alias to the command using --alias flag");
  return;
}

if (!command || command.length === 0) {
  console.error("Command missing!!!");
  return;
}

console.log(`alias ${alias}="${command.join(' ')}"`)
exec(`alias ${alias}="${command.join(' ')}"`, (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    console.log("Error", err);
    return;
  }

  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }

  // the *entire* stdout and stderr (buffered)
  console.log("Alia Created")
  console.log(stdout);
});

console.log("Command is -->", command.join(' '));
console.log("Alias is -->", alias);