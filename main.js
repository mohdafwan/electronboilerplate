const {app,BrowserWindow} = require('electron')

let win;

function createWindow(){
    win = new BrowserWindow({
        width:1000,height:600,
        webPreferences:{
            nodeIntegration:true,
        }
    })
    win.loadURL('http://google.com')
    win.loadFile('index.html');
    // win.webContents.openDevTools();
    win.on('close',()=>{
        win = null;
    })
}

app.on('ready',createWindow);
app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
})
app.on('activate',()=>{
    if(win === null){
        createWindow();
    }
})
