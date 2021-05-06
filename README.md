## FAQ for Developers
### What is APPX File?
As you may see, when packaging and building the software with Electron Builder, you're given a `.appx` file if you haven't modify the package file yet.
The reason why we use a `.appx` file is because of the Microsoft Store on Windows 10. Microsoft Store only accepts .appx file, we can't just throw a .exe at it. 

### As for the question above, how do I get a EXE file instead of a APPX file?
If you're not on a Windows 10 operating system, you can still get a EXE file when building the software.
In the __package.json__ file, look for the build area, then simply change `appx` to `nsis`.
[Learn more about NSIS](https://www.electron.build/configuration/nsis) for Electron Builder.

### Why Include Font Awesome in the Files? You could just use a script?
Yes, a simple line of code could of added Font Awesome to the software.
The reason why I choice to add it was for offline use, in case the user goes offline the icons would still load for them.

### Why Electron?
I'm mostly experienced with web code and have gained a lot of experience mostly in Electron in the past two years.
So I take advantage of my skill set by using Electron.

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
npm install electron@9.4.4
npm install glasstron
npm install electron-builder
```
Please only use Electron v9.0.0 - v9.4.4 or variables will be undefined.

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

If you're using an older version of Windows and not Windows 10, please change `appx` to `exe` in the build configuration found in __package.json__.

## 💡 Credits
Game Panel controls were thanks to https://github.com/hokein/electron-sample-apps/tree/master/webview/browser

Blur effect is thanks to https://github.com/AryToNeX/Glasstron
