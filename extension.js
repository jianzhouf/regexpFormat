// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed


// 获取当前编辑器对象
const editor = vscode.window.activeTextEditor;

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "regexpformat" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('regexpformat.helloWorld', function () {
		// The code you place here will be executed every time your command is executed
		// 查找并替换文本
		// 指定要查找和替换的正则表达式
		// 获取选定的文本
    let selection = editor.selection;
    let text = editor.document.getText(selection);
    if (!text) {
      return;
    }
		let newText = text.replace(/(\d+)px/g, 'p($1)');
		editor.edit(editBuilder => {
			editBuilder.replace(selection, newText);
		});
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from regexpFormat!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
