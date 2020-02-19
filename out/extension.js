"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const core_1 = require("./core");
function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.csvToMarkdown', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            var selection = editor.selection;
            var text = editor.document.getText(selection);
            editor.edit(builder => {
                builder.replace(selection, core_1.convert(text));
            });
        }
        else {
            vscode.window.showInformationMessage('You must select a text to convert! :)');
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map