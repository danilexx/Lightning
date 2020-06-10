export default {
    name: 'Notification',
    template: `<div>

<div class="mb-8 mx-2 content-center cursor-pointer" id="notification" style="display: none;" onclick="closeNotification()">
    <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
        <div class="flex-shrink-0">
            <i class="fas fa-bolt h-12 w-12 text-5xl"></i>
        </div>
        <div class="ml-6 pt-1">
            <h4 class="text-xl text-gray-900 leading-tight" class="notification-title" id="notification-title">App</h4>
            <p class="text-base text-gray-600 leading-normal">Port was successfully created!</p>
        </div>
    </div>
</div>

</div>`
}