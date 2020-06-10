export default {
    name: 'Region',
    data: function () {
        return {
            region: '',
            regionDropdown: false
        }
    },
    mounted() {
        if (localStorage.region) {
            this.region = localStorage.region;
        }
    },
    watch: {
        region(newRegion) {
            localStorage.region = newRegion;
        }
    },
    template: `<div>

<div class="text-4xl font-bold">Region</div>
<div v-on:click="regionDropdown = !regionDropdown" v-bind:class="{ 'is-active': regionDropdown }"
    class="dropdown">
    <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <span class="icon is-small is-left">
                <i class="fas fa-globe-americas"></i>
            </span>
            <span>Region <span style="font-weight: bold; text-transform: uppercase;">{{ region }}</span></span>
            <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
        </button>
        <p class="help">In order to reduce latency, please select the region closest to you.</p>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
            <a v-on:click="region = 'us'" v-bind:class="{ 'is-active': region == 'us' }" class="dropdown-item">
                United States
            </a>
            <a v-on:click="region = 'eu'" v-bind:class="{ 'is-active': region == 'eu' }" class="dropdown-item">
                Europe
            </a>
            <a v-on:click="region = 'ap'" v-bind:class="{ 'is-active': region == 'ap' }" class="dropdown-item">
                Asia/Pacific
            </a>
            <a v-on:click="region = 'au'" v-bind:class="{ 'is-active': region == 'au' }" class="dropdown-item">
                Australia
            </a>
            <a v-on:click="region = 'sa'" v-bind:class="{ 'is-active': region == 'sa' }" class="dropdown-item">
                South America
            </a>
            <a v-on:click="region = 'jp'" v-bind:class="{ 'is-active': region == 'jp' }" class="dropdown-item">
                Japan
            </a>
            <a v-on:click="region = 'in'" v-bind:class="{ 'is-active': region == 'in' }" class="dropdown-item">
                India
            </a>
        </div>
    </div>
</div>

</div>`
}