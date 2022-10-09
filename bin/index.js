#!/usr/bin/env node
'use strict';

/**
 * @file bin/index.js文件入口
 * @author dinert
 */

const chalk = require('chalk')
const program = require('commander')
const requirePackage = require('../package.json')
const leven = require('leven')


program
.version(requirePackage.version, '-v, -V, --version')
.usage('<command> [options]')

program
    .command('install')
    .description('Generate formatting configuration')
    .action(async () => {
        console.log(chalk.greenBright(`The ${requirePackage.packageName} command install is executed.`))
        require('../lib/install')()
    })


// add some useful info on help
program.on('--help', () => {
    console.log()
    console.log(`  Run ${chalk.cyan(`${requirePackage.packageName} <command> --help`)} for detailed usage of given command.`)
    console.log()
})


// output help information on unknown commands
program.on('command:*', ([cmd]) => {
    program.outputHelp()
    console.log(`  ` + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`))
    console.log()
    suggestCommands(cmd)
    process.exitCode = 1
  })

program.parse(process.argv)

// 输入不存在的命令
function suggestCommands (unknownCommand) {
    const availableCommands = program.commands.map(cmd => cmd._name)

    let suggestion
    console.log('chalkchalk')
    availableCommands.forEach(cmd => {
      const isBestMatch = leven(cmd, unknownCommand) < leven(suggestion || '', unknownCommand)
      if (leven(cmd, unknownCommand) < 3 && isBestMatch) {
        suggestion = cmd
      }
    })
    if (suggestion) {
      console.log(`  ` + chalk.red(`Did you mean ${chalk.yellow(suggestion)}?`))
    }
  }