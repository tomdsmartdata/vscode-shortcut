import { window, SecretStorage, ExtensionContext } from "vscode";

const SHOTCUT_API_TOKEN = 'Shortcut.Api.Token';

export async function configureToken(context: ExtensionContext): Promise<void> {
    const shortcutToken = await window.showInputBox({
		value: '',
		placeHolder: 'Paste your Shortcut API Token',
	});

    if (!shortcutToken) {
        return;
    }
    try {
    context.secrets.store(SHOTCUT_API_TOKEN, shortcutToken);
    } catch(e) {
        console.error(e);
        window.showErrorMessage('Failed to store Shortcut API Token');
    }
    window.showInformationMessage(`Successfully stored Shortcut API Token Securely`);
};
