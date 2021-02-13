function openUptimeWinL() {
    const remote = require('electron').remote;
    const BrowserWindow = remote.BrowserWindow;

    var win = new BrowserWindow({ width: 800, height: 600, frame: true, autoHideMenuBar: true, webPreferences: {webviewTag: true}});
    win.webContents.loadURL(`file://${__dirname}/page/uptime.html`);   
    win.webContents.webContents.on('did-finish-load', function() {
      win.webContents.webContents.insertCSS('#titlebar{display: none !important;}') /* Remove Windows Titlebar if OS is Linux */
    });
}

