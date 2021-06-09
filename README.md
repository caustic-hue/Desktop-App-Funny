![image](https://img.shields.io/badge/Translation%3A%20Chinese-0%25-lightgrey)
![image](https://img.shields.io/badge/Translation%3A%20Spanish-0%25-lightgrey)

# Read before using
basically just a joke by changing most of the stuff to "funny".

# Falix Software (Formly FalixNodes Software)
![image](https://user-images.githubusercontent.com/51213244/121123903-fe27d080-c7f1-11eb-9aba-4102590265f7.png)

## 🔗 Links

### Download
Windows:

[![Microsoft Store](https://i.imgur.com/vh5hmVa.png)](https://www.microsoft.com/en-us/p/falixnodes-software/9p5mmnfs825p)

Linux:

[![Snap Store](https://raw.githubusercontent.com/snapcore/snap-store-badges/master/EN/%5BEN%5D-snap-store-black-uneditable.png)](https://snapcraft.io/falixnodes)

### Websites
[Software Website](https://software.falixnodes.net)

[Help Center](https://help.falixnodes.net/falix/software)

### Other
[License](https://github.com/FalixNodes-Software/Desktop-App/blob/master/md/LICENSE)


## ❔ Q&A for Developers
### Why is Font Awesome included offline? You could use a script instead.
Yes, I could of ended up using one of code that includes Font Awesome with the software. The reason why I include Font Awesome with the software in the `/src/fonts/` folder is for offline usage. This way, if the user goes offline unexpectly, icons will stay load. Something would look off if the icons didn't load.

### Why Electron?
#### What is it?
Electron is an open-source software framework developed and maintained by GitHub. It allows for the development of desktop GUI applications using web technologies: it combines the Chromium rendering engine and the Node.js runtime. - [Wikipedia](https://en.wikipedia.org/wiki/Electron_(software_framework))

#### Why I use it
I, Korbs, am mostly comfortable and knowledgeable  with web coding languages such as HTML, CSS, and JavaScript. Using Electron was the right approach for me, and I've acquired a huge amount of experience with it over the last two years. Cross-platform support was also shortened.

There are tons of other good reasons why to use Electron, you can read more about that here on [Alibaba Cloud](https://www.alibabacloud.com/blog/what-is-electronjs-and-why-should-you-use-it_581971) (Article).

### Why all these requirements to just build it?
The reason why the software needs all these requirements like Python and Visual Studio(Desktop Development with C++) is because of technology that was coded into the software like [Glasstron](https://www.npmjs.com/package/glasstron) and [XTerm](https://xtermjs.org/).

## 🕑 Timeline
 - 2021
   - May
     - 25th - ~~Upgrade Electron from `v12` or `v9.4.4` to `v13`~~
     - 27th or 28th - ~~Stable release of v3.0.0 for Windows 10~~
   - June
     - 11th - Will be removed from the Snapstore and switch to AppImage
     - 11th - Stable release of v3.0.0 for macOS
   - July
     - 12th - Release v3.1.0 with language support
     - 12th - Add language support for software website
     - 12th - Open new feedback website
   - December
     - 15th - v4.0.0 Beta opens
   - October 
     - 19th - Upgrade requirements of NodeJS from `v14` to `v16`
 - 2022
   - October 
     - 18th - Upgrade requirements of NodeJS from `v16` to `v18`

## 🔧 Preparing to Build
### Requirements
 - [NodeJS](https://nodejs.org/en/) 14.16.0 or above
 - [Python](https://www.python.org/) 3.9 or above (Windows 7 no longer supprted)
 - [Visual Studio Community](https://visualstudio.microsoft.com/) (Install Desktop Development with C++) (on Windows)
 - [Visual C++ Redistributable](https://support.microsoft.com/en-us/topic/the-latest-supported-visual-c-downloads-2647da03-1eea-4433-9aff-95f26a218cc0) (on Windows)
 - At least 8GB of storage

### Downloading Source Code
#### Using Git
If you have Git already installed, run the following command to download and automatically extract the source code from our GitHub:
```
git clone https://github.com/FalixNodes-Software/Desktop-App/
```

#### Using GitHub CLI
If you have GitHub CLI already installed, run the following command to download and automatically extract the source code from our GitHub:
```
gh repo clone FalixNodes-Software/Desktop-App
```

If you don't have Git or GitHub CLI installed, you can download it manually from our [GitHub](https://github.com/FalixNodes-Software/Desktop-App/) or install [Git](https://git-scm.com/) or install [GitHub CLI](https://cli.github.com/).

You can also download the source code manually and go from there.

### Building
#### Installing Dependencies
FalixNodes Software uses Electron and other required packages to run the app and uses Electron Builder to package it up nicely. Run the following commands to install them:
```
npm install install
```

Make sure Electron says `^9.4.4` in the __package.json__, everything else can be updated to it's latest version.

The reason why we use Electron 9.4.4 is because the new terminal built-in won't work properly on later versions of Elecron.

Make sure Electron Builder are under `devDependencies` in the __package.json__ file or it will refuse to build.

### Running
After all required dependencies are installed, you should be able to run the software with the start command provided in __package.json__.

To run the start command, simply run the following command:
```
npm start
```

### Create a Package
Wanna create an installer? You can do this with Electron Builder, there is already a build command ready which is provided in __package.json__.

To start building the installer, run the following command: 
```
npm run build
```

NOTE: If you're using versions of Windows older than Windows 10, please change `appx` to `exe` in the build configuration found in __package.json__, `appx` files are for Windows 10 only.

If you're using Windows 10, Electron may have some issues building the APPX file, as we don't use Electron Builder for Window 10.

## 💡 Credits
Built and maintained by [Korbs Studio](https://github.com/KorbsStudio).

Game Panel controls possible thanks to [/webview/browser/ in Electron Sample Apps by Hokein](https://github.com/hokein/electron-sample-apps/tree/master/webview/browser).

Blur composition effect possible thanks to [Glasstron by AryToNex](https://github.com/AryToNeX/Glasstron).
