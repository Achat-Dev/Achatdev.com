<script>
    import { clamp, lerp } from "$lib/math"
    import { projects } from "$lib/assets/data.json"
    import Project from "$lib/project/project.svelte"
    import Footer from "$lib/footer.svelte"

    let scrollY
    let windowHeight

    $: threshold = windowHeight / 3.0
    $: scrollPercentage = clamp(scrollY / threshold, 0.0, 1.0)

    $: textScale = scrollPercentage >= 1.0 ? 0.0 : lerp(1.0, 1.5, scrollPercentage)
    $: textOpacity = lerp(1.0, 0.0, scrollPercentage)
    $: textBlur = lerp(0.0, 1.0, scrollPercentage)

    $: projectCount = Object.keys(projects).length + 1
    $: siteHeight = windowHeight * projectCount
</script>

<svelte:window bind:scrollY={scrollY} bind:innerHeight={windowHeight}/>

<div class="slide-container background-gradient">
    <div class="page-container" style="--scale: {textScale}; --opacity: {textOpacity}; --blur: {textBlur}rem">
        <h1>Hi, I am Achat</h1>
        <h4>I like game development and complex systems</h4>
    </div>
</div>

{#each projects as { header, description, images }, i}
    <Project {header} {description} {images} index={i + 1}/>
{/each}

<Footer index={projectCount}/>

<div class="page-sizer" style="--height: {siteHeight}px"></div>

<style>
    .page-sizer {
        width: 100%;
        height: var(--height);
        max-height: var(--height);
    }

    .page-container {
        width: 80%;
        text-align: center;
        scale: var(--scale);
        opacity: var(--opacity);
        filter: blur(var(--blur));
    }
</style>
