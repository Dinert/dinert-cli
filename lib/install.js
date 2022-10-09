/**
 * @file lib/install.js 初始规范化配置
 * @author dinert
 */

const chalk = require('chalk')
const requirePackage = require('../package.json')



module.exports = async () => {
    console.log(chalk.blueBright(`  哈喽！欢迎使用${requirePackage.author}的脚手架 ${chalk.yellowBright('\\(^o^)/~')}`))

    await require('./standard/pullCode')()      // 是否拉取代码

    await require('./standard/eslint')()        // 是否安装晓娜的eslint



}