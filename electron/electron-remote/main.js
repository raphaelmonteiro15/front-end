const electron = require('electron')
const BrowserWindow  = electron.BrowserWindow
const app = electron.app
const path = require('path')
const url = require('url')

app.on('ready', createWindow)

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
}
