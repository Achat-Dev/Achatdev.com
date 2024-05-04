<script>
    import { Scrollable } from "$lib/scrollable"
    import { constants } from "$lib/assets/data.json"
    import ProjectScreenshot from "./projectScreenshot.svelte"

    export let header
    export let description
    export let images
    export let index

    const scrollable = new Scrollable(constants.thresholdIn, constants.thresholdOut, { a: 0.5, b: 1.0, c: 1.0, d: 1.5 }, { a: 0.0, b: 1.0, c: 1.0, d: 0.0 }, { a: 1.0, b: 0.0, c: 0.0, d: 1.0 });

    let scrollY
    let windowHeight

    let visual = { scale: 0.0, opacity: 0.0, blur: 0.0, zIndex: 'auto' }
    
    $: threshold = windowHeight * (index - 1) + windowHeight / 4.0
    $: {
        scrollable.update(scrollY, threshold, windowHeight)
        visual.scale = scrollable.getScale()
        visual.opacity = scrollable.getOpacity()
        visual.blur = scrollable.getBlur()
        visual.zIndex = scrollable.getZIndex()
    }
</script>

<svelte:window bind:scrollY={scrollY} bind:innerHeight={windowHeight}/>

<div class="slide-container" style="--zIndex: {visual.zIndex}; --margin: {-windowHeight}px">
    {#each images as { src, alt, transform }}
        <ProjectScreenshot {src} {alt} {transform} {threshold}/>
    {/each}
</div>

<div class="slide-container" style="--zIndex: {visual.zIndex}; --margin: {-windowHeight}px">
    <div class="project-container" style="--scale: {visual.scale}; --opacity: {visual.opacity}; --blur: {visual.blur}rem">
        <div class="project-content">
            <h1>{header}</h1>
            <hr/>
            {@html description}
        </div>
    </div>
</div>

<style>
    h1 {
        text-align: center;
    }

    hr {
        filter: invert();
    }

    .slide-container {
        z-index: var(--zIndex);
    }

    .project-container {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        scale: var(--scale);
        opacity: var(--opacity);
        filter: blur(var(--blur));
    }

    .project-content {
        width: 70%;
        padding: 3rem;

    }

    @media only screen and (max-width: 1450px) {
        .project-content {
            width: 80%;
        }
    }

    @media only screen and (max-width: 1000px) {
        .project-content {
            width: 90%;
        }
    }

    @media only screen and (max-width: 600px) {
        .project-container {
            font-size: small;
        }
        
        .project-content {
            width: 95%;
        }
    }

    @media only screen and (max-width: 500px) {
        .project-container {
            font-size: smaller;
        }
        
        .project-content {
            width: 100%;
        }
    }

    :global([data-theme="light"] .project-content) {
        background-color: rgba(255, 255, 255, 0.7);
        transition: var(--pico-transition);
    }

    :global([data-theme="dark"] .project-content) {
        background-color: rgba(0, 0, 0, 0.7);
        transition: var(--pico-transition);
    }
</style>
