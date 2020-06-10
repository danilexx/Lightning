export default {
    name: 'controlPanel',
    template: `<div id="controlpanel">

<div class="my-8 mx-8 content-center absolute bottom-0 left-0" style="/*display: none*/">
    <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
        <div class="flex-shrink-0">
            <i class="fas fa-bolt h-12 w-12 text-5xl"></i>
        </div>
        <div class="ml-6 pt-1">
          <div id="controlpanel-title"></div>
          <div id="controlpanel-link"></div>
            <h4 class="text-xl text-gray-900 leading-tight" class="notification-title" id="notification-title"></h4>
            <p class="text-base text-gray-600 leading-normal"></p>
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" id="disconnect" onclick="disconnect();">Disconnect</button>
            <a href="http://localhost:4040/status" target="_blank" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Inspect</a>
        </div>
    </div>
</div>

</div>`
}