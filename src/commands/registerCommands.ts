import * as vscode from 'vscode';
import { commands } from 'vscode';

import { helloCommand } from './hello';
import { configureToken } from './config';

export function registerCommands(context: vscode.ExtensionContext): void {
    
    // register the hello command
    let helloDisposable = commands.registerCommand('vscode-shortcut.helloWorld', helloCommand);
    context.subscriptions.push(helloDisposable);

    // register the command to persist a user's Shortcut API token
    let configureTokenDisposable = commands.registerCommand('vscode-shortcut.configureToken', () => {
        configureToken(context);
    });
    context.subscriptions.push(configureTokenDisposable);
}
