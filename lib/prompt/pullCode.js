module.exports = {
    pull: [
        {
            name: 'action',
            type: 'list',
            message: `是否要从dinert的github上下载项目模板代码`,
            choices: [
                {
                    name: 'yes', value: true
                },
                {
                    name: 'no', value: false
                }
            ]
        }
    ]
}