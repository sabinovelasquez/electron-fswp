const {app, BrowserWindow} = require('electron')
app.on('ready', () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false
    }
  })
  win.setFullScreen(true)
  // win.openDevTools()
  win.loadURL('http://dev.lupo.cl/xbox/home/')
  win.on('closed', () => {
    win = null
  })
})
// electron-packager . xbox_fullscreen --overwrite --asar=true --platform=win32 --arch=ia32 --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="Xbox Fullscreen"