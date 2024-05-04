<script>
    import { Scrollable } from "$lib/scrollable"
    import { constants } from "$lib/assets/data.json"
    import { base } from "$app/paths"

    export let src
    export let alt
    export let transform
    export let threshold

    const offset = Math.random() > 0.5 ? Math.random() * 150 : -Math.random() * 150
    const random = Math.random()
    const scrollable = new Scrollable(constants.thresholdIn, constants.thresholdOut, { a: 0.5, b: 1.0, c: 1.0, d: 1.5 + random }, { a: 0.0, b: 1.0, c: 1.0, d: 0.0 }, { a: 1.0 + (random * 3.0), b: 0.0, c: 0.0, d: 1.0 + (random * 3.0) });

    let scrollY
    let windowHeight

    let visual = { scale: 0.0, opacity: 0.0, blur: 0.0 }

    $: {
        scrollable.update(scrollY, threshold - offset, windowHeight)
        visual.scale = scrollable.getScale()
        visual.opacity = scrollable.getOpacity()
        visual.blur = scrollable.getBlur()
    }
</script>

<svelte:window bind:scrollY={scrollY} bind:innerHeight={windowHeight}/>

<img src="{base}/{src}" alt="{alt}" style="--scale: {visual.scale}; --opacity: {visual.opacity}; --blur: {visual.blur}rem; --transform: {transform}"/>

<style>
    img {
        position: absolute;
        transform: var(--transform);
        scale: var(--scale);
        opacity: var(--opacity);
        filter: blur(var(--blur));
    }
</style>