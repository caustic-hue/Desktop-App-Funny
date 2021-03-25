function openHelpCenterWin() {
    const remote = require('electron').remote;
    const BrowserWindow = remote.BrowserWindow;

    var win = new BrowserWindow({ width: 1070, height: 800, frame: false, autoHideMenuBar: true, webPreferences: {webviewTag: true}});
    win.loadURL(`file://${__dirname}/page/help.html`);
}