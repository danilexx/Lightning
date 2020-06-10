import Notification from './Notification.js'
import Dashboard from './Modal/Dashboard.js'
import Auth from './Modal/Auth.js'
import Region from './Modal/Region.js'
import About from './Modal/About.js'
import Help from './Modal/Help.js'
import Donate from './Modal/Donate.js'
import controlPanel from './controlPanel.js'

export default {
  name: 'Modal',
  components: {
    Notification,
    Dashboard,
    Auth,
    Region,
    About,
    Help,
    Donate,
    controlPanel
  },
  data: function () {
    return {
      modalItem: 'dashboard'
    }
  },
  template: `<div>

  <div class="flex">
    <div class="w-1/5 bg-blue-900 text-blue-700 h-screen">

      <div class="flex">
        <div class="w-full"></div>
        <div class="w-full"></div>
        <div class="w-full"></div>
        <div class="w-full"></div>
      </div>

      <div class="w-full text-center">
        <i class="fas fa-bolt text-blue-500 text-3xl py-5"></i>
      </div>
      <a v-on:click="modalItem = 'dashboard'" v-bind:class="{ 'text-green-500': modalItem == 'dashboard' }">
        <div class="w-full text-center text-3xl cursor-pointer">
          <i class="fas fa-tachometer-alt"></i>
        </div>
      </a>
      <a v-on:click="modalItem = 'auth'" v-bind:class="{ 'text-green-500': modalItem == 'auth' }">
        <div class="w-full text-center text-3xl cursor-pointer">
          <i class="fas fa-lock"></i>
        </div>
      </a>
      <a v-on:click="modalItem = 'region'" v-bind:class="{ 'text-green-500': modalItem == 'region' }">
        <div class="w-full text-center text-3xl cursor-pointer">
          <i class="fas fa-globe-americas"></i>
        </div>
      </a>
      <a v-on:click="modalItem = 'about'" v-bind:class="{ 'text-green-500': modalItem == 'about' }">
        <div class="w-full text-center text-3xl cursor-pointer">
          <i class="fas fa-info-circle"></i>
        </div>
      </a>
      <a v-on:click="modalItem = 'help'" v-bind:class="{ 'text-green-500': modalItem == 'help' }">
        <div class="w-full text-center text-3xl cursor-pointer">
          <i class="fas fa-question-circle"></i>
        </div>
      </a>
      <a v-on:click="modalItem = 'donate'" v-bind:class="{ 'text-green-500': modalItem == 'donate' }">
        <div class="w-full text-center text-3xl cursor-pointer">
          <i class="fas fa-donate"></i>
        </div>
      </a>
    </div>
    <div class="w-full bg-gray-500 h-screen py-8 px-8">
      <Notification />
      <div v-show="modalItem == 'dashboard'">
        <Dashboard />
      </div>
      <div v-show="modalItem == 'auth'">
        <Auth />
      </div>
      <div v-show="modalItem == 'region'">
        <Region />
      </div>
      <div v-show="modalItem == 'about'">
        <About />
      </div>
      <div v-show="modalItem == 'help'">
        <Help />
      </div>
      <div v-show="modalItem == 'donate'">
        <Donate />
      </div>
      <controlPanel />
    </div>
  </div>

</div>`
}