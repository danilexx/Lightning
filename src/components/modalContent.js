import Auth from './Modal/Auth.js'
import Region from './Modal/Region.js'
import About from './Modal/About.js'
import Donate from './Modal/Donate.js'

export default {
  name: 'modalContent',
  components: {
    Auth,
    Region,
    About,
    Donate
  },
  data: function () {
    return {
      modalItem: 'auth'
    }
  },
  template: `
<div>

    <div class="columns">
      <div class="column is-one-fifth">
        <aside class="menu">
          <p class="menu-label">Setup</p>
          <ul class="menu-list">
            <li><a v-on:click="modalItem = 'auth'" v-bind:class="{ 'is-active': modalItem == 'auth' }">Auth</a></li>
            <li><a v-on:click="modalItem = 'region'" v-bind:class="{ 'is-active': modalItem == 'region' }">Region</a>
            </li>
          </ul>
          <p class="menu-label">General</p>
          <ul class="menu-list">
            <li><a v-on:click="modalItem = 'dashboard'"
                v-bind:class="{ 'is-active': modalItem == 'dashboard' }">Dashboard</a></li>
            <li><a v-on:click="modalItem = 'help'" v-bind:class="{ 'is-active': modalItem == 'help' }">Help</a></li>
            <li><a v-on:click="modalItem = 'about'" v-bind:class="{ 'is-active': modalItem == 'about' }">About</a></li>
          </ul>
          <p class="menu-label">Contribute</p>
          <ul class="menu-list">
            <li><a v-on:click="modalItem = 'donate'" v-bind:class="{ 'is-active': modalItem == 'donate' }">Donate</a>
            </li>
          </ul>
        </aside>
      </div>
      <div class="column">
        <div v-show="modalItem == 'auth'">
          <Auth />
        </div>
        <div v-show="modalItem == 'region'">
          <Region />
        </div>
        <div v-show="modalItem == 'dashboard'">Dashboard</div>
        <div v-show="modalItem == 'help'">Help</div>
        <div v-show="modalItem == 'about'">
          <About />
        </div>
        <div v-show="modalItem == 'donate'">
          <Donate />
        </div>
      </div>
    </div>

</div>
    `
}