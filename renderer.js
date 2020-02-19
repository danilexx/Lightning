/**
 * Location: "node_modules/ngrok/process.js"
 * Replace: "const defaultDir = __dirname + '/bin';"
 * With: "const defaultDir = __dirname.replace('app.asar', 'app.asar.unpacked') + '/bin';"
 */

// Close Notifications
function closeNotification() {
    document.getElementById('notification').style.display = "none";
};

// Notification Function
function notify(notifyContent) {
    document.getElementById('notification-title').innerHTML = notifyContent;

    document.getElementById('notification').style.display = "block";
    setTimeout(function () {
        document.getElementById('notification').style.display = "none";
    }, 10000);
}