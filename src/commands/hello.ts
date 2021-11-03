import * as vscode from 'vscode';

export function helloCommand() {
    // The code you place here will be executed every time your command is executed
    // Display a message box to the user
    vscode.window.showInformationMessage('Hello Visual Studio Code from Shortcut!');
}
