const ngrok = require('ngrok');
const {
    clipboard
} = require('electron');

function lightning(lightningName, lightningAddr) {

    ngrok.disconnect();

    notify(lightningName);

    var lightningAuthtoken = localStorage.getItem('auth');
    var lightningRegion = localStorage.getItem('region');

    (async function () {
        const url = await ngrok.connect({
            proto: 'tcp',
            addr: lightningAddr,
            authtoken: lightningAuthtoken,
            region: lightningRegion,
            binPath: path => path.replace('app.asar', 'app.asar.unpacked'),
        });

        var cleanURL = url.replace('tcp://', '');
        clipboard.writeText(cleanURL);

        document.getElementById('controlpanel').style.display = "block";
        document.getElementById("controlpanel-title").innerHTML = "<b>" + lightningName + "</b>:" + lightningAddr + " <span style='font-weight:bold;text-transform: uppercase;'>" + lightningRegion + "</span>";
        document.getElementById("controlpanel-link").innerHTML = cleanURL + " was copied to your clipboard.";

        localStorage.setItem('controlpanel-title', lightningName);
        localStorage.setItem('controlpanel-addr', lightningAddr);
        localStorage.setItem('controlpanel-link', cleanURL);

    })();

}

// Disconnect
function disconnect() {
    ngrok.disconnect();
    document.getElementById('controlpanel').style.display = "none";
}