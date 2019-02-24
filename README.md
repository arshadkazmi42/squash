# Squash :tada:

[![Build](https://img.shields.io/travis/com/arshadkazmi42/squash.svg)](https://travis-ci.com/arshadkazmi42/squash/)
[![NPM Downloads](https://img.shields.io/npm/dt/ak-squash.svg)](https://www.npmjs.com/package/ak-squash)
[![Package Size](https://img.shields.io/bundlephobia/min/squash.svg)](https://www.npmjs.com/package/ak-squash)
[![NPM Version](https://img.shields.io/npm/v/ak-squash.svg)](https://www.npmjs.com/package/ak-squash)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/squash.svg)](https://github.com/arshadkazmi42/squash/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/squash.svg)](https://github.com/arshadkazmi42/squash/commits/master)
[![Node Version](https://img.shields.io/badge/node-v8.0%2B-brightgreen.svg)](https://github.com/arshadkazmi42/squash/)

<img src="https://raw.githubusercontent.com/arshadkazmi42/squash/master/assets/squash.gif" alt="Squash"/><br>

Let's squash your commands.

Squash converts your shell commands to a named commands and you can run the command using the name given to it using squash.

> Give us a :star: if you like our work :heart:

<a href="https://www.buymeacoffee.com/arshadkazmi42" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
<a href="https://www.patreon.com/bePatron?u=15454240" target="_blank"><img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patron!" height="40"></a>

Please consider donating, if you like my work

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

Once you are done with the setup. You can start giving names to your commands.

> You can find example usage of all the available features of squash [here](usage)

Syntax for using squash is

`squash {{COMMAND}} --alias={{NAME_FOR_COMMAND}}`

- **COMMAND**: This is your full command which needs to be given a name
- **NAME_FOR_COMMAND**: This is the name which you want to assign to the command

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
- **help**: to get help for squash
- **list**: to list all the created commands
- **system-alias**: to list all the system reserved aliases
- **pass-args**: arguments called on the alias will be passed to the command. Use when creating the alias

## Limitations

- It does not work in windows.
- It does not supports `cd` command
- **Manually exporting the path `/usr/local/.squash` is very important.**

## Contributing

We are constantly working on improving squash and we need all the help we can get.
You can contribute to this project by giving [suggestions](https://github.com/arshadkazmi42/squash/issues/new), fixing open [issues](https://github.com/arshadkazmi42/squash/issues) or by implementing a new feature.
Read our contibution guide [here](CONTRIBUTING.md)

## Contributors

Thank you to all the contributors who help in making this project better :raised_hands:

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a><a href="https://github.com/ArthurCueio"><img src="https://github.com/ArthurCueio.png" width="30" /></a><a href="https://github.com/Zandew"><img src="https://github.com/Zandew.png" width="30" /></a><a href="https://github.com/co16353sidak"><img src="https://github.com/co16353sidak.png" width="30" /></a><a href="https://github.com/samuelweekes"><img src="https://github.com/samuelweekes.png" width="30" /></a><a href="https://github.com/alexmarginean16"><img src="https://github.com/alexmarginean16.png" width="30" /></a><a href="https://github.com/konstunn"><img src="https://github.com/konstunn.png" width="30" /></a><a href="https://github.com/mzmmlds"><img src="https://github.com/mzmmlds.png" width="30" /></a><a href="https://github.com/fathurifki"><img src="https://github.com/fathurifki.png" width="30" /></a>

