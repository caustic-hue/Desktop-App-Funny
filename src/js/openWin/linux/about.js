function openAboutWinL() {
  const remote = require('electron').remote;
  var path = require('path');
  const BrowserWindow = remote.BrowserWindow;

  var win = new BrowserWindow({ width: 400, height: 180, resizable: false, frame: true, transparent: true, autoHideMenuBar: true});
  win.webContents.loadURL(`file://${__dirname}/page/about.html`);   
  win.webContents.webContents.on('did-finish-load', function() {
    win.webContents.webContents.insertCSS('#titlebar{display: none !important;}') /* Remove Windows Titlebar if OS is Linux */
  });
}