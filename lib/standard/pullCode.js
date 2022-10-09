const pullCodePrompt = require('../prompt/pullCode')
const inquirer = require('inquirer')
const chalk = require('chalk')
var child_process = require('child_process')

const { spawn } = child_process


module.exports = async () => {

    return new Promise(async resolve => {
        const {action} = await inquirer.prompt(pullCodePrompt.pull)

        if(!action) {resolve(false) }

        var projectTemplate = spawn('git', ['clone', '-b', 'main', 'https://github.com/Dinert/utils.git', 'utils'])

        projectTemplate.stderr.on('data', function (data) {
            if(data.indexOf('fatal') !== -1) {
                console.log(chalk.red(data));
                resolve(true)
            }else{
                console.log(chalk.green(data));
            }
        });

        projectTemplate.on('close', code => {
            if(code === 0) {
                console.log(chalk.greenBright('下载模板完成 \(^o^)/~'))

                resolve(true)
            }
        })
    })


}