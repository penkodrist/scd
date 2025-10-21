const { app, BrowserWindow, ipcMain } = require('electron')
require('@electron/remote/main').initialize();
const createWindow = () => {
    const win = new BrowserWindow({
        width: 952,
        height: 536,
        minWidth: 952,
        minHeight: 536,
        frame: false,
        titleBarStyle: 'hidden',
        fullscreenable: false,
        fullscreen: false,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: true,
            backgroundThrottling: false,
            disableHtmlFullscreenWindowResize: true,
        }
    })
    const { enable } = require('@electron/remote/main');
    enable(win.webContents);
    win.loadFile('index.html')
    win.webContents.openDevTools();
    ipcMain.on('minimize',() =>     { win.minimize() })
    ipcMain.on('close', () =>       { app.quit() })
}
app.whenReady().then(() => { createWindow() })
