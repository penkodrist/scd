const { ipcRenderer } = require('electron')
const remote = require('@electron/remote')
const win = remote.getCurrentWindow()
let maximizeToggle = document.querySelector('.maximize img')
function closeApp(e) { e.preventDefault(); ipcRenderer.send('close') }
function minimize() { ipcRenderer.send('minimize') }

win.on('maximize', () => { maximizeToggle.setAttribute('src', './assets/icons/windowControlsIcons/unmaximize.png') })
win.on('unmaximize', () => { maximizeToggle.setAttribute('src', './assets/icons/windowControlsIcons/maximize.png') })
document.querySelector('.close').addEventListener("click", closeApp)
document.querySelector('.minimize').addEventListener('click', minimize)