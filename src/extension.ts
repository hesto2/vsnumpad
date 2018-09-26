'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    const registerKeypadCommand = function(character:string) {
        return vscode.commands.registerCommand(`vsnumpad.print${character}`, () => {
            let editor = vscode.window.activeTextEditor;
            if (editor) {
                const position = editor.selection.active;
                editor.edit((builder) => {
                    builder.insert(position, character);
                })
            }
        })
    }

    let keys = ['0','1','2','3','4','5','6','7','8','9'];
    keys.forEach(key => {
        context.subscriptions.push(registerKeypadCommand(key));
    });
}

// this method is called when your extension is deactivated
export function deactivate() {
}