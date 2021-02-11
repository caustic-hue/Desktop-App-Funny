function openAboutWin() {
    const remote = require('electron').remote;
    var path = require('path');
    const BrowserWindow = remote.BrowserWindow;

    var win = new BrowserWindow({ width: 400, height: 340, resizable: false, frame: false, autoHideMenuBar: true, webPreferences: {webviewTag: true, nodeIntergration: true}});
    win.loadURL(`file://${__dirname}/page/about.html`);
}