# x4-bc-dev README

Makes X4 BC development easy

Watches for typescript changes and compiles
Watches for bussiness object changes and updates 'x4-app-package.json' files (in progress)
Watches for code changes and restarts debugger (in progress)
Ability to log a user after debugger starts (in progress)

## Features

- starts automatically on 'x4-bc' workspace startup
- run on 'Run X4 Development Service' command

## Requirements

To use the extension you need have 'x4-bc' as your root project folder

## Extension Settings

None for now

## Known Issues

- stop on 'Stop X4 Development Service' command
- allowing command call while old running

## Release Notes

### 1.0.2

Fix watch tsc task name, add problem watcher, and node_modules path

### 1.0.1

Add  package description
Fix extension not starting on workspace startup

### 1.0.0

Initial release of x4-bc-dev

