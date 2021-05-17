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
[Learn here](https://help.falixnodes.net/falix/software/building/)

## 💡 Credits
Game Panel controls were thanks to https://github.com/hokein/electron-sample-apps/tree/master/webview/browser

Blur effect is thanks to https://github.com/AryToNeX/Glasstron
