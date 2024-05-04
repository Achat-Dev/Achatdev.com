<script>
    import { projects } from "$lib/assets/data.json"
    import JumpPoint from "./jumpPoint.svelte"
    
    export let threshold
    export let siteHeight

    let windowHeight
</script>

<svelte:window bind:innerHeight={windowHeight}/>

<div class="jump-point-container">
    <JumpPoint y={0} header={"Beginning"}/>
    {#each projects as { header }, i}
        <JumpPoint y={windowHeight * (i + 1) - threshold} {header}/>
    {/each}
    <JumpPoint y={siteHeight} header={"End"}/>
</div>

<style>
    .jump-point-container {
        position: fixed;
        right: 15px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        gap: 0px;
        z-index: 899;
        transition: var(--icon-transition);
    }

    .jump-point-container:hover {
        gap: 15px;
    }
</style>
