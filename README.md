# FalixNodes Software v3
## To-Do List
 - [x] Build new About window
 - [x] Add appearence settings
   - [x] Light and Dark mode
   - [x] Sidebar opacity
   - [ ] ~~Switch between custom or native titlebar~~ (Requires modifying main file)
   - [ ] ~~Change titlebar layout(Linux)~~ (Requires modifying main file)
   - [x] Change accent color
   - [ ] ~~Disable blur effect~~ (Requires modifying main file)
   - [ ] Enable/Disable certain tabs in sidebar
   - [x] Switch between small and full sidebar
 - [x] Finish new design and layout
 - [x] Add load button to both client and panel
 - [x] Add new controls to panel
 - [x] Add new blur effect for Windows
 - [x] Add new blur effect for macOS
 - [x] Add new blur effect for Linux(should work with supported DEs)
 - [x] Fix titlebar button functions on Windows
 - [x] First boot screen

## FAQ for Developers
### Why Include Font Awesome in the Files? You could just use a script?
Yes, a simple line of code could of added Font Awesome to the software.
The reason why I choice to add it was for offline use, in case the user goes offline the icons would still load for them.

### Why Electron?
I'm mostly experienced with web code and have gained a lot of experience mostly in Electron in the past two years.
So I take advantage of my skill set by using Electron.

### Really? Why the unnecessary blur effect behind the window?
I think it looks cool :)

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
