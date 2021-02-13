function openNewPanelL() {
    const remote = require('electron').remote;
    const BrowserWindow = remote.BrowserWindow;

    var win = new BrowserWindow({ width: 800, height: 600, frame: false, autoHideMenuBar: true, webPreferences: {webviewTag: true}});
    win.loadURL(`file://${__dirname}/page/panel.html`);
}