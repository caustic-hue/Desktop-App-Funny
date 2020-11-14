> You're currently viewing the README file for v2.20, which is not out yet. v2.20 is planned to be released on __December 1st__.
# FalixNodes
![image](https://i.imgur.com/nHUmzBG.png)
The FalixNodes application was built for users to have a quicker access to their FalixNodes client, panel, servers, and VPS(s) all through one place. We also include our help center in there if needed.

### Requirements
[Git](https://git-scm.com/downloads)

[Node](https://nodejs.org/en/download/)(v12 or up)

### Building
Clone project:
```
git clone https://github.com/FalixNodes-Software/Desktop-App
```
Change directory:
```
cd Desktop-App
```
Install packages:
```
npm install electron@9.0.5
npm install electron-builder
```
*Electron 9.0.5 is recommended for FalixNodes Software, as certain things broke in newer versions*

Run Build command:
```
npm run build
```
When building, it will build a setup for your operating, so if you're on Windows, it will create a EXE file; or if you're on Linux, it will create an AppImage and a Snap file; or if you're on macOS, it will create a DMG file.
