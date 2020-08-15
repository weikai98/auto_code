const vscode = require('vscode');
const util = require('./util');

/**
 * @param {*} document 
 * @param {*} position 
 * @param {*} token 
 * @param {*} context 
 */
function provideCompletionItems(document, position, token, context) {
    const projectPath = util.getProjectRootPath(document)
    const json = require(`${projectPath}/prompt-config.json`)
    const key = Object.keys(json)
    if (!key || key.length === 0) return
    return key.map(item => {
        let str = ''
        if (json[item]['body'] instanceof Array) {
            json[item]['body'].map(ele => {
                str += ' ' + ele
            })
        } else {
            str = json[item]['body']
        }
        return {
            label: str,
            kind: vscode.CompletionItemKind.Text,
            documentation: json[item]['describe']
        }
    })
}

/**
 * 光标选中当前自动补全item时触发动作，一般情况下无需处理
 * @param {*} item 
 * @param {*} token 
 */
function resolveCompletionItem(item, token) {
    return null;
}

module.exports = function(context) {
    // 注册代码建议提示，只有当按下“.”时才触发
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('html', {
        provideCompletionItems,
        resolveCompletionItem
    }));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('vue', {
        provideCompletionItems,
        resolveCompletionItem
    }));
};