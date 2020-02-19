export default {
    name: 'Notification',
    template: `
<div class="lightningNotification">

<div class="notification" id="notification" style="display: none; text-align: center;" onclick="closeNotification()">
    <div class="notification-title" id="notification-title"></div>
</div>

</div>
    `
}