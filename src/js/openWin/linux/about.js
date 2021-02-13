function openAboutWinL() {
  const remote = require('electron').remote;
  var path = require('path');
  const BrowserWindow = remote.BrowserWindow;

  var win = new BrowserWindow({ width: 400, height: 180, resizable: false, frame: true, transparent: true, autoHideMenuBar: true, webPreferences: {nodeIntergration: true}});
  win.loadURL(`file://${__dirname}/page/about.html`);
}