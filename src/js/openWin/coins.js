function openCoinsWin() {
    const remote = require('electron').remote;
    const BrowserWindow = remote.BrowserWindow;

    var win = new BrowserWindow({ width: 1000, height: 600, frame: true, autoHideMenuBar: true, webPreferences: {webviewTag: true}});
    win.loadURL(`file://${__dirname}/page/coins.html`);
    win.minimize()
}