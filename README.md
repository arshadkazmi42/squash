# Squash :tada:

[![Build](https://github.com/arshadkazmi42/squash/actions/workflows/nodejs.yml/badge.svg)](https://github.com/arshadkazmi42/squash/actions/workflows/nodejs.yml)
[![NPM Downloads](https://img.shields.io/npm/dt/ak-squash.svg)](https://www.npmjs.com/package/ak-squash)
[![Package Size](https://img.shields.io/bundlephobia/min/squash.svg)](https://www.npmjs.com/package/ak-squash)
[![NPM Version](https://img.shields.io/npm/v/ak-squash.svg)](https://www.npmjs.com/package/ak-squash)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/squash.svg)](https://github.com/arshadkazmi42/squash/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/squash.svg)](https://github.com/arshadkazmi42/squash/commits/master)
[![Node Version](https://img.shields.io/badge/node-v8.0%2B-brightgreen.svg)](https://github.com/arshadkazmi42/squash/)

<img src="https://raw.githubusercontent.com/arshadkazmi42/squash/master/assets/squash.gif" alt="Squash"/><br>

Let's squash your commands.

Squash allows you to give a custom name to your shell commands. These commands can be run using the custom name.

> Give us a :star: if you like our work :heart:

## Install

```
$ npm i -g ak-squash
```

## Setup

- **Export the squash path, to make the commands executable.**

    `export PATH=$PATH:/usr/local/.squash`

    To make this export permanent [read here](https://askubuntu.com/a/500794/579860)
- Now try running `squash --help`. This should display details on using squash
- This completes your setup

## Usage

Once you are done with the setup. You can start giving custom names to your commands.

> You can find example usage of all the available features of squash [here](usage)

Syntax for using squash is

`squash {{COMMAND}} --alias={{NAME_FOR_COMMAND}}`

- **COMMAND**: The shell command which will be given a name
- **NAME_FOR_COMMAND**: The custom name

**Note**: You can wrap the command between `"COMMAND"` if the command contains any types of quotes or spaces

#### Example

```
$ squash ls /home/squash --alias=list_squash
```

Now for using above created command just run
```
$ list_squash
```

## Available Flags
#### Flags that require parameters
```
squash {{COMMAND}} --{{FLAG}}={{NAME_FOR_COMMAND}}
```
- **alias**: to give name to a command
- **rm**: removes a previously squashed command
#### Flags without parameters
```
squash --{{FLAG}}
```
- **help**: gets help for squash
- **list**: lists all the created commands
- **system-alias**: lists all the system reserved aliases
- **pass-args**: arguments called on the alias will be passed to the command. Use when creating the alias

## Limitations

- It does not work in Windows.
- It does not support the `cd` command
- **Manually exporting the path `/usr/local/.squash` is very important.**

## Contributing

We are constantly working on improving squash and we need all the help we can get.
You can contribute to this project by giving [suggestions](https://github.com/arshadkazmi42/squash/issues/new), fixing open [issues](https://github.com/arshadkazmi42/squash/issues) or by implementing a new feature.
Read our contibution guide [here](CONTRIBUTING.md)

