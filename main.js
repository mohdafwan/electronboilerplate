const {app,BrowserWindow} = require('electron')

let win;
const time = new Date();
const s = time.getTime();

function createWindow(){
    console.log(`WindowsCreated ${s/1000}`);
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
        debugger;
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

app.on("browser-window-blur",(e)=>{
    console.log("App Unfocused");
})

app.on("browser-window-focus",()=>{
    console.log("App Focused");
})