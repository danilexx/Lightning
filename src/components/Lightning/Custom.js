export default {
  name: 'Custom',
  data: function () {
    return {
      modal: false,
      port: ''
    }
  },
  mounted() {
    if (localStorage.port) {
      this.port = localStorage.port;
    }
  },
  watch: {
    port(newPort) {
      localStorage.port = newPort;
    }
  },
  template: `<div>

<div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
  <div class="flex-shrink-0">
    <i class="fas fa-pen text-4xl"></i>
  </div>
  <div class="ml-6 pt-1">
    <h4 class="text-xl text-gray-900 leading-tight">Custom</h4>
    <p class="text-base text-gray-600 leading-normal">{{ port }}</p>
    <input class="input" type="text" placeholder="Port" v-model="port">
    <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onclick="lightning('Custom', localStorage.getItem('port'));">Port</button>
  </div>
</div>

</div>`
}