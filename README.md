# x4-bc-dev

Makes X4 BC development easy

- starts automatically on 'x4-bc' workspace startup
- run on 'Run X4 Development Service' command

## Features

1. Watches for typescript changes and compiles
2. Watches for bussiness object changes and updates 'x4-app-package.json' files (in progress)
3. Watches for code changes and restarts debugger (in progress)
4. Ability to log a user after debugger starts (in progress)

## Requirements

To use the extension you need have 'x4-bc' as your root project folder

## Extension Settings
```
{
    x4-bc-dev.autostart: true
}
```
## Known Issues

None for now

## Release Notes

### 1.1.1

Fix watch task command path

### 1.1.0

Autostart setting

### 1.0.2

Fix watch tsc task name, add problem watcher, and node_modules path

### 1.0.1

Add package description
Fix extension not starting on workspace startup

### 1.0.0

Initial release of x4-bc-dev

