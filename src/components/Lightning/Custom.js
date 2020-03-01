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
  template: `
<div>

    <a v-on:click="modal = !modal" v-bind:class="{ 'is-active': modal }" class="is-pulled-right">
      <span class="tag is-primary">
        <span class="icon">
          <i class="fas fa-pen"></i>
        </span>
      </span>
    </a>

    <transition name="fade">
      <div v-if="modal" class="modal" v-bind:class="{ 'is-active': modal }">
        <div v-on:click="modal = !modal" class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Lightning - Custom Port</p>
            <button v-on:click="modal = !modal" class="delete" aria-label="close"></button>
          </header>

          <section class="modal-card-body">

            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="Name">
              </div>
              <p class="help">Enter the name of your port.</p>
            </div>

            <div class="field">
              <label class="label">Port</label>
              <div class="control">
                <input class="input" type="text" placeholder="Port" v-model="port">
              </div>
              <p class="help">Enter the number of your port.</p>
            </div>

          </section>

          <footer class="modal-card-foot">
            <button v-on:click="modal = !modal" class="button">Close</button>
          </footer>
        </div>
      </div>
    </transition>

    <div class="media-content">
    <div class="content">
        <span class="tag is-primary">{{ port }}</span>
        <div class="title">Custom</div>
        <button class="button" onclick="lightning('Custom', localStorage.getItem('port'));">Port</button>
    </div>
    </div>

</div>
    `
}