// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import getRandomEmoji from './utils/helper';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('randomemojipicker.random', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showInformationMessage('エディタがアクティブではありません。');
			return;
		}

		const randomEmoji = getRandomEmoji();

		const cursorPosition = editor.selection.active;
		const range = new vscode.Range(cursorPosition, cursorPosition);

		editor.edit(editBuilder => {
			editBuilder.replace(range, randomEmoji);
		});
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
