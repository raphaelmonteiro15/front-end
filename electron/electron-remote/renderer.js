const {BrowserWindow} = require('electron').remote

app.on('ready', createRemoteWindow)

function createRemoteWindow(){
  let win = new BrowserWindow({width: 800, height: 600})
  win.loadURL('https://github.com')
}
