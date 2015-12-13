const env = 'development';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// Main window is in the global scope to prevent the
// object being deleted during garbage collection.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    app.quit();
});

app.on('ready', function() {
    // Create the window.
    mainWindow = new BrowserWindow({
        resizable: false
    });

    if (env == 'production') mainWindow.setMenu(null);

    // and load the index.html of the app.
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
        // Free up some memory
        mainWindow = null;
    });
});
