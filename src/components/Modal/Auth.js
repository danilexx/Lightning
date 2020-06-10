export default {
    name: 'Auth',
    data: function () {
        return {
            auth: ''
        }
    },
    mounted() {
        if (localStorage.auth) {
            this.auth = localStorage.auth;
        }
    },
    watch: {
        auth(newAuth) {
            localStorage.auth = newAuth;
        }
    },
    template: `<div>

<div class="text-4xl font-bold">Auth</div>

<form class="w-full max-w-sm">
    <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
            <label class="block font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">Authentication Token</label>
        </div>
        <div class="md:w-2/3">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" v-model="auth" maxlength="43" v-bind:class="{ 'is-success': auth.length == 43, 'is-danger': auth.length < 43 }" placeholder="Authentication Token">
        </div>
    </div>
    <p class="help">The auth token can be found at <a href="https://ngrok.com" target="_blank">ngrok.com</a>.</p>
</form>

</div>`
}