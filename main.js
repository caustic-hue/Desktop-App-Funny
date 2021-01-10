const {app, BrowserWindow, Menu, protocol, ipcMain} = require('electron');
const log = require('electron-log');
const {autoUpdater} = require("electron-updater");
const { truncate } = require('fs');
const isMac = process.platform === 'darwin';
var path = require('path');

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
let win;

function sendStatusToWindow(text) {
  log.info(text);
  win.webContents.send('message', text);
}
function createDefaultWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 700,
    minWidth: 540,
    minHeight: 33,
    frame: true,
    autoHideMenuBar: true,
    webPreferences: {
      icon: path.join(__dirname, '/src/img/icons/app/splash.png'), // Set app icon
      webviewTag: true,
      nodeIntegration: true,
      devTools: false
    }
  });
  win.setIcon(path.join(__dirname, '/src/img/icons/app/splash.png')); // Set app icon
  win.on('closed', () => {
    win = null;
  });
  win.loadURL(`file://${__dirname}/index.html#v${app.getVersion()}`);
  return win;
}
// Auto Updater
autoUpdater.on('checking-for-update', () => {
  sendStatusToWindow('Checking for update...');
})
autoUpdater.on('update-available', (info) => {
  sendStatusToWindow('Update available.');
})
autoUpdater.on('update-not-available', (info) => {
  sendStatusToWindow('Update not available.');
})
autoUpdater.on('error', (err) => {
  sendStatusToWindow('Error in auto-updater. ' + err);
})
autoUpdater.on('download-progress', (progressObj) => {
  let log_message = "Download speed: " + progressObj.bytesPerSecond;
  log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
  log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
  sendStatusToWindow(log_message);
})
app.on('ready', function() {
  createDefaultWindow();
  
});
app.on('window-all-closed', () => {
  app.quit();
});
app.on('ready', function()  {
  autoUpdater.checkForUpdatesAndNotify();
});

app.on('web-contents-created', function (webContentsCreatedEvent, contents) {
  if (contents.getType() === 'webview') {
    contents.on('new-window', function (newWindowEvent, url) {
      console.log('block');
      newWindowEvent.preventDefault();
    });
  }
});

// Alt Menu
const template = [
  {
    role: '',
  }
]

if (process.platform === 'darwin') {
  const name = app.getName()
  template.unshift({
    label: name,
    submenu: [
      {
        role: 'quit'
      }
    ]
  })
}


 const menu = Menu.buildFromTemplate(template)
 Menu.setApplicationMenu(menu)