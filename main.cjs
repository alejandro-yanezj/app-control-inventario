const { app, BrowserWindow } = require('electron');
const { join } = require('path');
let mainWindow;

const url = join(__dirname, './dist/index.html')


function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1300,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  
  mainWindow.loadFile(url);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', () => {
  createWindow();
  console.log("la url actual de la app es -->", url)

});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
