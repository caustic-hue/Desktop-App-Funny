const glasstron = require('glasstron');
const electron = require("electron");
const {app, BrowserWindow, Menu, protocol, ipcMain} = require('electron');
const { remote } = require('electron');
const path = require('path');
const url = require('url');
electron.app.commandLine.appendSwitch("enable-transparent-visuals");

var osvar = process.platform; /* Detecting OS */
if (osvar == 'darwin') {electron.app.on("ready", () => {setTimeout(spawnWindowMac,process.platform === "linux" ? 1000 : 0);electron.nativeTheme.on("updated", checkDarkTheme);});
}else if(osvar == 'win32'){electron.app.on("ready", () => {setTimeout(spawnWindow,process.platform === "linux" ? 1000 : 0);electron.nativeTheme.on("updated", checkDarkTheme);});
}else{electron.app.on("ready", () => {setTimeout(spawnWindowMac,process.platform === "linux" ? 1000 : 0);electron.nativeTheme.on("updated", checkDarkTheme);});}



function spawnWindow(){
	const win = new glasstron.BrowserWindow({
		width: 1200,
		height: 800,
		backgroundColor: "#00000000",
		title: "FalixNodes Software",
		resizable: true,
		autoHideMenuBar: true,
		frame: false,
		show: false,
		blur: true,
		blurType: "acrylic",
		blurGnomeSigma: 100,
		blurCornerRadius: 20,
		vibrancy: "fullscreen-ui",
		webPreferences: {
			preload: path.join(__dirname, "preload.js"), // use a preload script
			icon: path.join(__dirname, '/src/img/app/icon.png'), // Set app icon
			nodeIntegration: true,
			webviewTag: true
		}
})
	
  	win.setIcon(path.join(__dirname, '/src/img/app/icon.png')); // Set app icon
	win.webContents.loadURL(`file://${__dirname}/index.html`);
    
	if(process.platform === "linux"){
		win.on("resize", () => {
			win.webContents.send("maximized", !win.isNormal());
		});
	}
	
	win.on("ready-to-show", () => {
		checkDarkTheme(win);
		if(process.platform === "linux") win.webContents.send("maximized", !win.isNormal());
		if(process.platform === "win32" && win.getDWM().supportsAcrylic()){
			acrylicWorkaround(win, 60);
			win.webContents.send("supportsAcrylic");
		}
		win.show();
	});

	if(process.platform === "win32"){
		electron.ipcMain.on("blurTypeChange", (e, value) => {
			const win = electron.BrowserWindow.fromWebContents(e.sender);
			if(win !== null){
				win.blurType = value;
				e.sender.send("blurTypeChanged", win.blurType);
			}
		});
	}

	electron.ipcMain.on("blurToggle", async (e, value) => {
		const win = electron.BrowserWindow.fromWebContents(e.sender);
		if(win !== null){
			await win.setBlur(value);
			e.sender.send("blurStatus", await win.getBlur());
		}
	});
	
	electron.ipcMain.on("blurQuery", async (e) => {
		e.sender.send("blurStatus", await win.getBlur());
	});
	
	electron.ipcMain.on("close", () => {
		electron.app.quit();
	});

	electron.ipcMain.on("minimize", (e) => {
		const win = electron.BrowserWindow.fromWebContents(e.sender);
		win.minimize();
	});

	electron.ipcMain.on("wmQuery", async (e) => {
		if(process.platform !== "linux") return;
		e.sender.send("wmString", await glasstron.getPlatform()._getXWindowManager());
	});

	electron.ipcMain.on("gnomeSigma", async (e, res) => {
		if(process.platform !== "linux") return;
		if(await glasstron.getPlatform()._getXWindowManager() !== "GNOME Shell") return;
		win.blurGnomeSigma = res;
	});

	return win;
}

function spawnWindowMac(){
	const win = new glasstron.BrowserWindow({
		width: 1200,
		height: 800,
		backgroundColor: "#00000000",
		resizable: true,
		autoHideMenuBar: true,
		frame: false,
		transparent: true,
		show: false,
		blur: false,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"), // use a preload script
			nodeIntegration: true,
			webviewTag: true
		}
})


win.webContents.loadFile('index.html');
win.webContents.webContents.on('did-finish-load', function() {
  win.webContents.webContents.insertCSS('html.windows [data-for-os=mac]{display:none !important}ui#Win32_5792{display: none !important;}ui#Linux_5792{display: none !important;}') /* Remove Windows Titlebar if OS is Linux */
});
	
	win.webContents.loadURL(`file://${__dirname}/index.html`);
    
	if(process.platform === "linux"){
		win.on("resize", () => {
			win.webContents.send("maximized", !win.isNormal());
		});
	}
	
	win.on("ready-to-show", () => {
		checkDarkTheme(win);
		if(process.platform === "linux") win.webContents.send("maximized", !win.isNormal());
		if(process.platform === "win32" && win.getDWM().supportsAcrylic()){
			acrylicWorkaround(win, 60);
			win.webContents.send("supportsAcrylic");
		}
		win.show();
	});

	if(process.platform === "win32"){
		electron.ipcMain.on("blurTypeChange", (e, value) => {
			const win = electron.BrowserWindow.fromWebContents(e.sender);
			if(win !== null){
				win.blurType = value;
				e.sender.send("blurTypeChanged", win.blurType);
			}
		});
	}

	electron.ipcMain.on("blurToggle", async (e, value) => {
		const win = electron.BrowserWindow.fromWebContents(e.sender);
		if(win !== null){
			await win.setBlur(value);
			e.sender.send("blurStatus", await win.getBlur());
		}
	});
	
	electron.ipcMain.on("blurQuery", async (e) => {
		e.sender.send("blurStatus", await win.getBlur());
	});
	
	electron.ipcMain.on("close", () => {
		electron.app.quit();
	});

	electron.ipcMain.on("minimize", (e) => {
		const win = electron.BrowserWindow.fromWebContents(e.sender);
		win.minimize();
	});

	electron.ipcMain.on("wmQuery", async (e) => {
		if(process.platform !== "linux") return;
		e.sender.send("wmString", await glasstron.getPlatform()._getXWindowManager());
	});

	electron.ipcMain.on("gnomeSigma", async (e, res) => {
		if(process.platform !== "linux") return;
		if(await glasstron.getPlatform()._getXWindowManager() !== "GNOME Shell") return;
		win.blurGnomeSigma = res;
	});

	return win;
}

function spawnWindowLinux(){
	const win = new glasstron.BrowserWindow({
		width: 1200,
		height: 800,
		backgroundColor: "#00000000",
		resizable: true,
		autoHideMenuBar: true,
		frame: true,
		show: false,
		blur: true,
		blurType: "blurbehind",
		blurGnomeSigma: 100,
		blurCornerRadius: 20,
		vibrancy: "fullscreen-ui",
		webPreferences: {
			preload: path.join(__dirname, "preload.js"), // use a preload script
			icon: path.join(__dirname, '/src/img/app/icon.png'), // Set app icon
			nodeIntegration: true,
			webviewTag: true
		}
})


win.setIcon(path.join(__dirname, '/src/img/app/icon.png')); // Set app icon
win.webContents.loadFile('index.html');
win.webContents.webContents.on('did-finish-load', function() {
  win.webContents.webContents.insertCSS('#titlebar{display: none !important;} ui#Win32_5792{display: none !important;}') /* Remove Windows Titlebar if OS is Linux */
});
	
	win.webContents.loadURL(`file://${__dirname}/index.html`);
    
	if(process.platform === "linux"){
		win.on("resize", () => {
			win.webContents.send("maximized", !win.isNormal());
		});
	}
	
	win.on("ready-to-show", () => {
		checkDarkTheme(win);
		if(process.platform === "linux") win.webContents.send("maximized", !win.isNormal());
		if(process.platform === "win32" && win.getDWM().supportsAcrylic()){
			acrylicWorkaround(win, 60);
			win.webContents.send("supportsAcrylic");
		}
		win.show();
	});

	if(process.platform === "win32"){
		electron.ipcMain.on("blurTypeChange", (e, value) => {
			const win = electron.BrowserWindow.fromWebContents(e.sender);
			if(win !== null){
				win.blurType = value;
				e.sender.send("blurTypeChanged", win.blurType);
			}
		});
	}

	electron.ipcMain.on("blurToggle", async (e, value) => {
		const win = electron.BrowserWindow.fromWebContents(e.sender);
		if(win !== null){
			await win.setBlur(value);
			e.sender.send("blurStatus", await win.getBlur());
		}
	});
	
	electron.ipcMain.on("blurQuery", async (e) => {
		e.sender.send("blurStatus", await win.getBlur());
	});
	
	electron.ipcMain.on("close", () => {
		electron.app.quit();
	});

	electron.ipcMain.on("minimize", (e) => {
		const win = electron.BrowserWindow.fromWebContents(e.sender);
		win.minimize();
	});

	electron.ipcMain.on("wmQuery", async (e) => {
		if(process.platform !== "linux") return;
		e.sender.send("wmString", await glasstron.getPlatform()._getXWindowManager());
	});

	electron.ipcMain.on("gnomeSigma", async (e, res) => {
		if(process.platform !== "linux") return;
		if(await glasstron.getPlatform()._getXWindowManager() !== "GNOME Shell") return;
		win.blurGnomeSigma = res;
	});

	return win;
}

function checkDarkTheme(win){
	win.webContents.send("darkTheme", electron.nativeTheme.shouldUseDarkColors);
}

function acrylicWorkaround(win, pollingRate = 60){
	win.on("will-move", (e) => {
		if(win.blurType !== "acrylic")
			return;
		
		e.preventDefault();

		if(win._moveTimeout)
			clearTimeout(win._moveTimeout);

		win._moveTimeout = setTimeout(
			() => {
				win._isMoving = false;
				clearInterval(win._moveInterval);
				win._moveInterval = null;
			}, 1000/pollingRate);

		if(!win._isMoving){
			win._isMoving = true;
			if(win._moveInterval)
				return false;

			win._moveLastUpdate = 0;
			win._moveStartBounds = win.getBounds();
			win._moveStartCursor = electron.screen.getCursorScreenPoint();

			win._moveInterval = setInterval(() => {
				const now = Date.now();
				if(now >= win._moveLastUpdate + (1000/pollingRate)){
					win._moveLastUpdate = now;
					const cursor = electron.screen.getCursorScreenPoint();

					win.setBounds({
						x: win._moveStartBounds.x + (cursor.x - win._moveStartCursor.x),
						y: win._moveStartBounds.y + (cursor.y - win._moveStartCursor.y),
						width: win._moveStartBounds.width,
						height: win._moveStartBounds.height
					});
				}
			}, 1000/(pollingRate * 10));
		}
	});

	win.on("will-resize", (e) => {
		if(win.blurType !== "acrylic")
			return;

		const now = Date.now();
		if(!win._resizeLastUpdate)
			win._resizeLastUpdate = 0;

		if(now >= win._resizeLastUpdate + (1000/pollingRate))
			win._resizeLastUpdate = now;
		else
			e.preventDefault();
	});
}