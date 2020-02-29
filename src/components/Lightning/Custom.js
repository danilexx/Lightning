export default {
    name: 'Custom',
    data: function () {
        return {
            modal: false
        }
    },
    template: `
<div>

    <a v-on:click="modal = !modal" v-bind:class="{ 'is-active': modal }">Custom</a>

    <transition name="fade">
      <div v-if="modal" class="modal" v-bind:class="{ 'is-active': modal }">
        <div v-on:click="modal = !modal" class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Lightning</p>
            <button v-on:click="modal = !modal" class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body">
            <modalContent />
          </section>
          <footer class="modal-card-foot">
            <!-- <button class="button is-success">Save changes</button> -->
            <button v-on:click="modal = !modal" class="button">Close</button>
          </footer>
        </div>
      </div>
    </transition>

</div>
    `
}