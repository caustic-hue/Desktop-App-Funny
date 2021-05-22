const electron = require("electron");
const {app, BrowserWindow, Menu, protocol, ipcMain, ipcRenderer, TouchBarColorPicker} = require('electron');
const isMac = process.platform === 'darwin'
const path = require('path');
const url = require('url');
const { remote } = require('electron');
const pty = require("node-pty");
const osUI = require('os-utils');
const os = require("os");

var shell = os.platform() === "win32" ? "powershell.exe" : "bash";
electron.app.commandLine.appendSwitch("enable-transparent-visuals");
var osvar = process.platform; /* Detecting OS */
if (osvar == 'darwin') {app.whenReady().then(() => {createWindowMac()})
}else if(osvar == 'win32'){app.whenReady().then(() => {createWindowWin()})
}else{app.whenReady().then(() => {createWindowLinux()})}

function createWindowWin () { /* Windows */
  const mainWindow = new BrowserWindow({
    backgroundColor: '#162230',
    width: 1200,
    height: 800,
    frame: false,
    show: false,
    transparent: false,
    closable: true,
    maximizable: true,
    minimizable: true,
    webPreferences: {
      preload: path.join(__dirname, "../../js/electron/preload.js"),
			nodeIntegration: true,
			webviewTag: true,
			devTools: false,
      enableRemoteModule: true,
      contextIsolation: false
    }
  })
  const loadWindow = new BrowserWindow({
    backgroundColor: '#162230',
    frame: false,
    minimizable: false,
    maximizable: false,
    closable: true,
    width: 250,
    height: 10,
    webPreferences: {
      devTools: false
    }
  })
  loadWindow.loadFile('src/html/loading/index.html');
  mainWindow.loadFile('src/html/index.html');
 setTimeout(() => {
  mainWindow.show();
 }, 5000); 
 setTimeout(() => {
  loadWindow.close();
 }, 4000);
  setInterval(() => {
    osUI.cpuUsage(function(v){
     mainWindow.webContents.send('cpu',v*100);
     mainWindow.webContents.send('gpu',v*100);
   });
  },1000);
  var ptyProcess = pty.spawn(shell, [], {
      name: "xterm-color",
      cols: 80,
      rows: 30,
      cwd: process.env.HOME,
      env: process.env
  });
  ptyProcess.on('data', function(data) {
      mainWindow.webContents.send("terminal.incomingData", data);
      console.log("");
  });
  ipcMain.on("terminal.keystroke", (event, key) => {
      ptyProcess.write(key);
  });
  mainWindow.webContents.on('new-window', function(e, url) {
   e.preventDefault();
   require('electron').shell.openExternal(url);
  });
}
function createWindowMac () { /* macOS */
  const mainWindow = new BrowserWindow({
    backgroundColor: '#162230',
    width: 1200,
    height: 800,
    frame: true,
    transparent: false,
    show: false,
    closable: true,
    maximizable: true,
    minimizable: true,
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      preload: path.join(__dirname, "../../src/js/electron/preload.js"),
			nodeIntegration: true,
			webviewTag: true,
			devTools: false,
      enableRemoteModule: true,
      contextIsolation: false
    }
  })
  const loadWindow = new BrowserWindow({
    backgroundColor: '#162230',
    frame: false,
    minimizable: false,
    maximizable: false,
    closable: true,
    width: 250,
    height: 10,
    webPreferences: {
      devTools: false
    }
  })
  loadWindow.loadFile('src/html/loading/index.html');
  mainWindow.loadFile('src/html/index.html');
  mainWindow.webContents.on('did-finish-load', function() {
    mainWindow.webContents.insertCSS('#titlebar{display: none !important;}') /* Remove Windows Titlebar if OS is Linux */
 })
 setTimeout(() => {
  mainWindow.show();
 }, 5000); 
 setTimeout(() => {
  loadWindow.close();
 }, 4000);
  setInterval(() => {
    osUI.cpuUsage(function(v){
     mainWindow.webContents.send('cpu',v*100);
     mainWindow.webContents.send('gpu',v*100);
   });
  },1000);
  var ptyProcess = pty.spawn(shell, [], {
      name: "xterm-color",
      cols: 80,
      rows: 30,
      cwd: process.env.HOME,
      env: process.env
  });
  ptyProcess.on('data', function(data) {
      mainWindow.webContents.send("terminal.incomingData", data);
      console.log("");
  });
  ipcMain.on("terminal.keystroke", (event, key) => {
      ptyProcess.write(key);
  });
  mainWindow.webContents.on('new-window', function(e, url) {
   e.preventDefault();
   require('electron').shell.openExternal(url);
  });
}
function createWindowLinux () { /* Linux */
  const mainWindow = new BrowserWindow({
    backgroundColor: '#162230',
    width: 1200,
    height: 800,
    frame: true,
    show: false,
    transparent: false,
    closable: true,
    maximizable: true,
    minimizable: true,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
			nodeIntegration: true,
			webviewTag: true,
      devTools: true,
      enableRemoteModule: true,
      contextIsolation: false
    }
  })
  const loadWindow = new BrowserWindow({
    backgroundColor: '#162230',
    frame: false,
    minimizable: false,
    maximizable: false,
    closable: true,
    width: 250,
    height: 10,
    webPreferences: {
      devTools: false
    }
  })
  loadWindow.loadFile('src/html/loading/index.html');
  mainWindow.loadFile('src/html/index.html');
  mainWindow.webContents.on('did-finish-load', function() {
    mainWindow.webContents.insertCSS('#titlebar{display: none !important;}') /* Remove Windows Titlebar if OS is Linux */
 })
 setTimeout(() => {
  mainWindow.show();
 }, 5000); 
 setTimeout(() => {
  loadWindow.close();
 }, 4000); 
 setInterval(() => {
   osUI.cpuUsage(function(v){
    mainWindow.webContents.send('cpu',v*100);
    mainWindow.webContents.send('gpu',v*100);
  });
 },1000);
 var ptyProcess = pty.spawn(shell, [], {
     name: "xterm-color",
     cols: 80,
     rows: 30,
     cwd: process.env.HOME,
     env: process.env
 });
 ptyProcess.on('data', function(data) {
     mainWindow.webContents.send("terminal.incomingData", data);
     console.log("");
 });
 ipcMain.on("terminal.keystroke", (event, key) => {
     ptyProcess.write(key);
 });
 mainWindow.webContents.on('new-window', function(e, url) {
	e.preventDefault();
	require('electron').shell.openExternal(url);
 });
}
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


