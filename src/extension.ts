'use strict';
import * as vscode from 'vscode';

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
export function deactivate() {
}