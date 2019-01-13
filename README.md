# Squash :tada:

<img src="https://raw.githubusercontent.com/arshadkazmi42/squash/master/assets/squash.png" alt="Squash"/> <br>

Let's squash your commands.

Squash converts your shell commands to a named commands and you can run the command using the name given to it using squash.

## Setup

- Install the library
    `yarn global add ak-squash`
- **Export the squash path, to make the commands executable.**
    
    `export PATH=$PATH:/usr/local/.squash`
    
    To make this export permanent [read here](https://askubuntu.com/a/500794/579860)
- Now try running `squash --help`. This should display details on using squash
- This completes your setup

## Usage

Once you are done with the setup. You can start giving names to your commands.

Syntax for using squash is

`squash {{COMMAND}} --alias={{NAME_FOR_COMMAND}}`

- **COMMAND**: This is your full command which needs to be given a name
- **NAME_FOR_COMMAND**: This is the name which you want to assign to the command

#### Example

```
$ squash ls /home/squash --alias=list_squash
```

Now for using above created command just run
```
$ list_squash
```

## Available Flags

- **--alias**: to give name to a command
- **--help**: to get help for squash
- **--list**: to list all the created commands
- **--system_alias**: to list all the system reserved aliases

## Limitations

- It does not work in windows.
- It does not supports `cd` command
- **Manually exporting the path `/usr/local/.squash` is very important.**

## Contributing

We are constantly working on improving squash and we need all the help we can get.
You can contribute to this project by giving [suggestions](https://github.com/arshadkazmi42/squash/issues/new), fixing open [issues](https://github.com/arshadkazmi42/squash/issues) or by implementing a new feature.
Read our contibution guide [here](CONTRIBUTING.md)

## Contributors
[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/squash/images/0)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/squash/links/0)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/squash/images/1)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/squash/links/1)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/squash/images/2)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/squash/links/2)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/squash/images/3)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/squash/links/3)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/squash/images/4)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/squash/links/4)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/squash/images/5)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/squash/links/5)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/squash/images/6)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/squash/links/6)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/squash/images/7)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/squash/links/7)
