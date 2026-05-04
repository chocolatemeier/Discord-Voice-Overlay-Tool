const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron');
const path = require('path');

// 版本號
const VERSION = "v1.8.0";

let mainWindow;
let inputWindow;
let isFramelessMode = false;

// 1. 設定變數與預設網址
const defaultURL = 'about:blank'; // 這是你要求的預設值
let currentURL = defaultURL; 

// 建立輸入網址的視窗
function createInputWindow() {
  inputWindow = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  inputWindow.loadFile('input.html');
}

// 建立顯示網頁的主視窗
function createMainWindow(url, options = {}) {
  const windowOptions = {
    width: options.width || 800,
    height: options.height || 600,
    x: options.x,
    y: options.y,
    frame: !isFramelessMode, // 根據模式決定是否有邊框
    transparent: isFramelessMode, // 無邊框時通常搭配透明
    alwaysOnTop: isFramelessMode, // 無邊框模式通常需要置頂
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  };

  const win = new BrowserWindow(windowOptions);
  
  // 處理自定義 URL (例如你輸入的 0)
  if (url === '0' || !url) {
    win.loadURL('about:blank');
  } else {
    win.loadURL(url);
  }

  return win;
}

// 2. 切換模式的函式
function toggleFramelessMode() {
  isFramelessMode = !isFramelessMode;
  
  let windowOptions = {};
  
  if (mainWindow && !mainWindow.isDestroyed()) {
    const [x, y] = mainWindow.getPosition();
    const [width, height] = mainWindow.getSize();
    windowOptions = { x, y, width, height };
    mainWindow.close();
  }

  // 使用 currentURL，這樣切換時就不會跳回預設值
 mainWindow = createMainWindow(currentURL, windowOptions);

if (isFramelessMode) {
    mainWindow.setIgnoreMouseEvents(true, { forward: true });
    mainWindow.setFocusable(false);
    mainWindow.setResizable(false);
    mainWindow.setSkipTaskbar(true);
} else {
    mainWindow.setIgnoreMouseEvents(false);
    mainWindow.setFocusable(true);
    mainWindow.setResizable(true);
    mainWindow.setSkipTaskbar(false);
	}
}
function registerShortcuts() {
  // 切換模式
  globalShortcut.register('Ctrl+Alt+O', toggleFramelessMode);

  // 退出應用
  globalShortcut.register('Ctrl+Alt+P', () => {
    app.quit();
  });
}

app.whenReady().then(() => {
  createInputWindow();
  registerShortcuts();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createInputWindow();
  }
});

// 3. 接收網址並保存到 currentURL
ipcMain.on('submit-url', (event, url) => {
  if (inputWindow) {
    inputWindow.close();
  }
  // 更新 currentURL，讓切換模式時能抓到正確的值
  currentURL = url || defaultURL; 
  mainWindow = createMainWindow(currentURL);
});

ipcMain.on('get-version', (event) => {
  event.returnValue = VERSION;
});

console.log(`應用程序版本: ${VERSION}`);