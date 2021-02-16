function openAboutWinM() {
    const remote = require('electron').remote;
    const BrowserWindow = remote.BrowserWindow;

    var win = new BrowserWindow({ width: 800, height: 600, frame: false, transparent: true, titleBarStyle: 'hiddenInset', autoHideMenuBar: true});
    win.webContents.loadURL(`file://${__dirname}/page/about.html`);   
    win.webContents.on('did-finish-load', function() {
      win.webContents.insertCSS('#titlebar{display: none !important;}') /* Remove Windows Titlebar if OS is Linux/macOS */
    });
}