function openHelpCenterWinM() {
    const remote = require('electron').remote;
    const BrowserWindow = remote.BrowserWindow;

    var win = new BrowserWindow({ width: 1070, height: 800, frame: false, titleBarStyle: 'hiddenInset', autoHideMenuBar: true, webPreferences: {webviewTag: true}});
    win.webContents.loadURL(`file://${__dirname}/page/help.html`);   
    win.webContents.webContents.on('did-finish-load', function() {
      win.webContents.webContents.insertCSS('#titlebar{display: none !important;}') /* Remove Windows Titlebar if OS is Linux/macOS */
    });
}