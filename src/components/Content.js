import Custom from './Lightning/Custom.js'

export default {
    name: 'Content',
    components: {
        Custom
    },
    template: `
<div class="lightningContent">

<section class="section">
    <div class="columns is-multiline">

        <div class="column is-half">
            <div class="box">
                <div class="media-content">
                    <div class="content">
                        <span class="tag is-primary">25565</span>
                        <div class="title">Minecraft</div>
                        <button class="button" onclick="lightning('Minecraft', 25565);">Port</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="column is-half">
            <div class="box">
                <Custom />
            </div>
        </div>

    </div>
</section>

</div>
    `
}