# FalixNodes Software v3
Welcome to `v3` branch of FalixNodes Software.
As of now, the software isn't fully functional in v3, as currently the user interface and design is still being worked out.

## To-Do List
 - [ ] Finish new design and layout
 - [x] Add load button to both client and panel
 - [x] Add new controls to panel
 - [x] Add new blur effect for Windows
 - [x] Add new blur effect for macOS
 - [x] Add new blur effect for Linux(should work with supported DEs)
 - [x] Fix titlebar button functions on Windows

## Building
### Requirements

You're required to have the following in order to build FalixNodes Software:
 - [Python](https://www.python.org/downloads/) v3.6 or later
 - [Node](https://nodejs.org/en/download/) v12 or later

### Install Packages
```
git clone https://github.com/FalixNodes-Software/Desktop-App/
cd Desktop-App
npm install electron@9.4.3
npm install glasstron
npm install electron-packager -g
```
The last command ending with `-g` must be installed as admin/sudo.

Please only use Electron v9.0.0 - v9.4.3 or variables will be undefined.

### Running
To start running the software, use:
```
npm start
```
### Packaging
To create a package of the software, use:
```
electron-packager .
```
This will package the software for your operating system.

If you want to package it for all operating systems(Windows, macOS, Linux), then use:
```
electron-packager . --platform=all
```
or if you want to be specific about the platform, replace `all` with `darwin`(macOS), `win32`, or `linux`.
