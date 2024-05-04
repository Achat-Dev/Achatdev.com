<script>
    import { constants, socialMedia } from "$lib/assets/data.json"
    import { Scrollable } from "./scrollable"
    import ScrollIndicator from "./scrollIndicator/scrollIndicator.svelte"

    export let index

    const scrollable = new Scrollable(constants.thresholdIn, constants.thresholdOut, { a: 0.5, b: 1.0, c: 1.0, d: 1.0 }, { a: 0.0, b: 1.0, c: 1.0, d: 1.0 }, { a: 1.0, b: 0.0, c: 0.0, d: 0.0 });

    let scrollY
    let windowHeight

    let visual = { scale: 0.0, opacity: 0.0, blur: 0.0 }

    $: threshold = windowHeight * (index - 1) + windowHeight / 4.0
    $: {
        scrollable.update(scrollY, threshold, windowHeight)
        visual.scale = scrollable.getScale()
        visual.opacity = scrollable.getOpacity()
        visual.blur = scrollable.getBlur()
    }
</script>

<svelte:window bind:scrollY={scrollY} bind:innerHeight={windowHeight}/>

<div class="slide-container" style="--margin: -{windowHeight}px">
    <div class="footer-container" style="--scale: {visual.scale}; --opacity: {visual.opacity}; --blur: {visual.blur}rem">
        <h1>Well, that's it :)</h1>
        <div class="icon-container">
            {#each socialMedia as { url, img, alt }}
            <div class="icon-content">
                <a href="{url}" target="_blank">
                    <img src="./src/lib/assets/{img}" alt="{alt}" class="img-invertible">
                </a>
            </div>
            {/each}
        </div>
    </div>
    <ScrollIndicator scale={visual.scale * 2.0} opacity={1.0 - visual.opacity} blur={1.0 - visual.blur}/>
</div>

<style>
    a {
        justify-content: center;
    }

    img {
        height: 1rem;
        width: 1rem;
        transition-property: scale !important;
        transition: var(--icon-transition) !important;
    }

    img:hover {
        scale: 1.15;
    }

    .footer-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        scale: var(--scale);
        opacity: var(--opacity);
        filter: blur(var(--blur));
    }

    .icon-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .icon-content {
        text-align: center;
        width: 2rem;
        height: 2rem;
    }

    :global([data-theme="dark"] .img-invertible) {
        filter: invert();
        transition-property: filter;
        transition: var(--pico-transition);
    }

    :global([data-theme="light"] .img-invertible) {
        filter: none;
        transition-property: filter;
        transition: var(--pico-transition);
    }
</style>
