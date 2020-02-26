import * as vscode from 'vscode';

const pjson = require('../package.json');

const {
    window,
    commands,
    tasks,
    workspace
} = vscode;
const settings = workspace.getConfiguration()[pjson.name];
const info = {
    id: pjson.name,
    name: pjson.displayName,
    project: 'x4-bc',
    command: pjson.contributes.commands[0].command,
    login: {
        flag: false,
        username: 'TheDelchev',
        password: 'Initial18'
    }
};

function validateRequirements(): boolean {
    if (!validateWorkspaceFolder()) {
        return false;
    }

    return true;
}

function validateWorkspaceFolder(): boolean {
    if (
        !workspace.workspaceFolders
        || workspace.workspaceFolders[0].name !== info.project
    ) {
        window.showErrorMessage('Workspace root folder is not ' + info.project + '!');

        return false;
    }

    return true;
}

function startTscWatch(): void {
    let task = new vscode.Task(
        { type: 'shell' },
        vscode.TaskScope.Workspace,
        'Watch TSC',
        'npm',
        new vscode.ShellExecution('node_modules/.bin/tsc --watch'),
        '$tsc-watch'
    );

    tasks.executeTask(task);
}

function startPackageVersionWatch(): void {
    //TODO
}

function startDebuggerWatch(): void {
    //TODO
}

function startLogin(): void {
    //TODO
}

export function activate(context: vscode.ExtensionContext) {
    console.log('activate..');

    let disposable = commands.registerCommand(info.command, () => {
        if (!validateRequirements()) {
            return;
        }

        startTscWatch();
        startPackageVersionWatch();
        startDebuggerWatch();
        startLogin();
    });

    context.subscriptions.push(disposable);

    if (settings.autostart) {
        commands.executeCommand(info.command);
    }
}

export function deactivate() { }
