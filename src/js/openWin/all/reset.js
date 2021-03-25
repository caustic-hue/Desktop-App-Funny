function openReset() {
    const { remote } = require('electron');
    const path = require('path');
    const url = require('url');
    const BrowserWindow = remote.BrowserWindow;
  
    var win = new BrowserWindow({
      width: 360,
      height: 110,
      backgroundColor: "#00000000",
      title: "FalixNodes Software",
      resizable: false,
      skipTaskbar: true,
      alwaysOnTop: true,
      center: true,
      autoHideMenuBar: true,
      frame: false,
      transparent: true,
      webPreferences: {
        preload: path.join(__dirname, "preload.js"), // use a preload script
        nodeIntegration: true
      }
  })
    win.webContents.loadURL(`file://${__dirname}/page/reset.html`);
}