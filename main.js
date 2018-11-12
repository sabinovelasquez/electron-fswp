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
