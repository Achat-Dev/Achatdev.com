<script lang="ts">
    let { title, text }: { title: string, text: string } = $props();
</script>

<div class="text-container">
    <h1>{title}</h1>
    <div class="flex-horizontal">
        <div class="vertical-line"></div>
        <div class="flex-vertical">
            {@html text}
        </div>
    </div>
</div>

<style>
    .text-container {
        width: 60%;
        padding: 2rem 2rem 2rem 0px;
    }
</style>
