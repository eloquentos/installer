// Warning: This app will have the ability to do damage to your OS when not in development mode
const env = 'development';

const electron = require('electron');
const dialog = require('dialog');
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
        frame: env === 'development'
    });

    mainWindow.maximize();

    if (env == 'production') mainWindow.setMenu(null);

    // and load the index.html of the app.
    mainWindow.loadURL('file://' + __dirname + '/views/index.html');

    var quitting = false;

    // Emitted when the window is closed.
    mainWindow.on('close', function(e) {
        if (quitting) return true;

        e.preventDefault();

        dialog.showMessageBox(mainWindow, {
            title: 'Are you sure you want to exit?',
            message: 'Exiting the installer will stop any current install progress and could leave your computer unbootable.',
            buttons: ['cancel', 'Reboot', 'Shutdown']
        }, function (response) {
            switch (response) {
                case 0:
                    return false;

                case 1:
                case 2:
                    quitting = true;
                    mainWindow.close();
                break;
            }

            var exec = require('child_process').exec;

            if (response == 1) {
                if (env == 'development') return console.log('reboot');

                exec('reboot now');
            } else if (response == 2) {
                if (env == 'development') return console.log('shutdown');

                exec('shutdown -h now');
            }
        });
    });
});
