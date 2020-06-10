import Custom from '../Lightning/Custom.js'

export default {
    name: 'Dashboard',
    components: {
        Custom
    },
    template: `<div>

<div class="flex">
    <div class="w-1/2 bg-gray-400 h-12">

        <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
            <div class="flex-shrink-0">
                <i class="fas fa-cube text-4xl"></i>
            </div>
            <div class="ml-6 pt-1">
                <h4 class="text-xl text-gray-900 leading-tight">Minecraft</h4>
                <p class="text-base text-gray-600 leading-normal">25565</p>
                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onclick="lightning('Minecraft', 25565);">Port</button>
            </div>
        </div>

    </div>
    <div class="w-1/2 bg-gray-500 h-12">
        <Custom />
    </div>
</div>

</div>`
}