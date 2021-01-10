function openUptimeWin() {
    const remote = require('electron').remote;
    const BrowserWindow = remote.BrowserWindow;

    var win = new BrowserWindow({ width: 800, height: 600, frame: true, maximize: false,  minimize: false, autoHideMenuBar: true, webPreferences: {webviewTag: true}});
    win.loadURL(`file://${__dirname}/page/uptime.html`);
}