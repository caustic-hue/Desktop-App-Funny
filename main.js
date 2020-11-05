const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const electron = require('electron')
const ipc = require('electron').ipcRenderer

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1300,
    height: 800,
    minWidth: 1000,
    minHeight: 460,
    darkTheme: true,
    autoHideMenuBar: true,
    icon: path.join(__dirname, './Icon.png'),
    webPreferences: {
      devTools: true,
      preload: path.join(__dirname, 'preload.js'),
      webviewTag: true,
      safeDialogsMessage: true,
      navigateOnDragDrop: true,
      spellcheck: true,
      experimentalFeatures: true,
      autoplayPolicy: true,
    }
  })

var contextMenu = Menu.buildFromTemplate([
  { label: 'Show App', click:  function(){
      mainWindow.show();
  } },
  { label: 'Quit', click:  function(){
      application.isQuiting = true;
      application.quit();
  } }
]);

  
  const template = [
    {
      label: 'About',
      submenu: [
        {
          label: 'Version 2.1',
        }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        {
          role: 'undo'
        },
        {
          role: 'redo'
        },
        {
          type: 'separator'
        },
        {
          role: 'cut'
        },
        {
          role: 'copy'
        },
        {
          role: 'paste'
        },
        {
          role: 'delete'
        },
        {
          role: 'selectall'
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Reload',
          accelerator: 'CmdOrCtrl+R',
          click (item, focusedWindow) {
            if (focusedWindow) focusedWindow.reload()
          }
        },
        {
          type: 'separator'
        },
        {
          role: 'resetzoom'
        },
        {
          role: 'zoomin'
        },
        {
          role: 'zoomout'
        },
        {
          type: 'separator'
        },
      ]
    },
    {
      role: 'window',
      submenu: [
        {
          role: 'minimize'
        },
        {
          role: 'close'
        }
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Status',
          click () { require('electron').shell.openExternal('https://status.falixnodes.net/') }
        },
        {
          label: 'Discord',
          click () { require('electron').shell.openExternal('https://discord.falixnodes.net/') }
        },
        {
          type: 'separator'
        },
        {
          label: 'FAQ',
          click () { require('electron').shell.openExternal('https://software.falixnodes.xyz/faq/') }
        },
        {
          type: 'separator'
        },
        {
          label: 'Report Issue',
          click () { require('electron').shell.openExternal('https://github.com/FalixNodes-Software/FalixNodes-Software/issues') }
        },
      ]
    }
  ]
  
  if (process.platform === 'darwin') {
    const name = app.getName()
    template.unshift({
      label: name,
      submenu: [
        {
          role: 'about'
        },
        {
          type: 'separator'
        },
        {
          role: 'services',
          submenu: []
        },
        {
          type: 'separator'
        },
        {
          role: 'hide'
        },
        {
          role: 'hideothers'
        },
        {
          role: 'unhide'
        },
        {
          type: 'separator'
        },
        {
          role: 'quit'
        }
      ]
    })
    template[1].submenu.push(
      {
        type: 'separator'
      },
      {
        label: 'Speech',
        submenu: [
          {
            role: 'startspeaking'
          },
          {
            role: 'stopspeaking'
          }
        ]
      }
    )
    template[3].submenu = [
      {
        label: 'Close',
        accelerator: 'CmdOrCtrl+W',
        role: 'close'
      },
      {
        label: 'Minimize',
        accelerator: 'CmdOrCtrl+M',
        role: 'minimize'
      },
      {
        label: 'Zoom',
        role: 'zoom'
      },
      {
        type: 'separator'
      },
      {
        label: 'Bring All to Front',
        role: 'front'
      }
    ]
  }
  
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
  
  
  mainWindow.loadFile('index.html')
  // Due to issue with opening the developer with DevTool, even when setting to "true", it's best to keep this here:
   mainWindow.webContents.openDevTools()
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

app.on('web-contents-created', function (webContentsCreatedEvent, contents) {
  if (contents.getType() === 'webview') {
    contents.on('new-window', function (newWindowEvent, url) {
      console.log('block');
      newWindowEvent.preventDefault();
    });
  }
});
