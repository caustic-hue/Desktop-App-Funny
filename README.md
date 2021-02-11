# FalixNodes Software v3
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
 - [Visual C++ Redistributable](https://support.microsoft.com/en-us/topic/the-latest-supported-visual-c-downloads-2647da03-1eea-4433-9aff-95f26a218cc0)
 - [Node](https://nodejs.org/en/download/) v12 or later

### Install Packages
```
git clone https://github.com/FalixNodes-Software/Desktop-App/
cd Desktop-App
npm install electron@9.4.3
npm install glasstron
npm install electron-builder
```
Please only use Electron v9.0.0 - v9.4.3 or variables will be undefined.

### Running
To start running the software, use:
```
npm start
```
### Packaging
To create a package of the software, use:
```
npm build
```
