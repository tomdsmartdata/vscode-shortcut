import * as vscode from 'vscode';
import { commands } from 'vscode';

import { helloCommand } from './hello';

export function registerCommands(context: vscode.ExtensionContext): void {
    
    // register the hello command
    let helloDisposable = commands.registerCommand('vscode-shortcut.helloWorld', helloCommand);
    context.subscriptions.push(helloDisposable);
}
