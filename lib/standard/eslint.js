const path = require('path')
const chalk = require('chalk')
const requirePackage = require('../../package.json')
const inquirer = require('inquirer')
const linter = require('../prompt/linter')



module.exports = async () => {
    return new Promise( async () => {
        const {action} = await inquirer.prompt(linter.lixiaona)
        if(!action) {resolve(false) }

        console.log(action, 'action')
    })

}