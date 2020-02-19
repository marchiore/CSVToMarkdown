import * as vscode from 'vscode';
import { convert } from './core';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.csvToMarkdown', () => {		
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			var selection = editor.selection; 
			var text = editor.document.getText(selection);
			editor.edit(builder => {
				builder.replace(selection, convert(text));
			});
		} else {
			vscode.window.showInformationMessage('You must select a text to convert! :)');
		}
	});

	context.subscriptions.push(disposable);
}
export function deactivate() {}
