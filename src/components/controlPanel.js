export default {
    name: 'controlPanel',
    template: `
<div>

<div class="box controlpanel notification" id="controlpanel" style="display: none;">
    <div class="columns">
      <div class="column">
        <div id="controlpanel-title"></div>
        <div id="controlpanel-link"></div>
      </div>
      <div class="column is-one-quarter controlpanel-buttons">
        <button class="button is-danger" id="disconnect" onclick="disconnect();">Disconnect</button>
        <a href="http://localhost:4040/status" target="_blank" class="button">Inspect</a>
      </div>
    </div>
</div>

</div>
    `
}