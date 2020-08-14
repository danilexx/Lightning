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
    template: `
<div>

<div class="title">Auth</div>

<div class="control has-icons-left">
    <label class="label">Auth Token</label>
    <div class="control">
        <input v-model="auth" v-bind:class="{ 'is-success': auth.length == 48, 'is-danger': auth.length < 48 }"
            class="input" type="text" maxlength="48" placeholder="Authentication Token">
        <span class="icon is-small is-left">
            <i class="fas fa-key"></i>
        </span>
    </div>
    <p class="help">The auth token can be found at <a href="https://ngrok.com" target="_blank">ngrok.com</a>.</p>
</div>

</div>
    `
}
