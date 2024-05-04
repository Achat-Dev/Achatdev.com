<script>
    import { onMount } from "svelte"
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

    onMount(() => {
        let dataTheme = localStorage.getItem("data-theme")
        if (dataTheme === null) {
            dataTheme = "light"
        }
        document.documentElement.setAttribute("data-theme", dataTheme)
    })
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
    :root {
        --pico-font-family: "Lato", Helvetica, Arial, sans-serif;
        --pico-transition: 0.5s ease-in-out;
        --icon-transition: 0.1s linear;
        scroll-behavior: smooth;
        transition: var(--pico-transition);
        overflow-x: hidden;
    }

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

    :global(.slide-container) {
        position: sticky;
        top: 0px;
        margin-top: var(--margin);
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    :global([data-theme="light"] .background-gradient) {
        background-image: linear-gradient(155deg, rgba(200, 200, 200, 0.0), rgba(230, 225, 235, 0.1));
        transition: var(--pico-transition);
    }

    :global([data-theme="dark"] .background-gradient) {
        background-image: linear-gradient(155deg, rgba(200, 200, 200, 0.0), rgba(205, 200, 210, 0.1));
        transition: var(--pico-transition);
    }

    :global(div) {
        overflow: hidden;
    }

    :global(a:hover) {
        transition: var(--icon-transition);
    }
    
    :global(a:not(a:hover)) {
        transition: var(--icon-transition);
    }

    :global(h1, h2, h3, h4, h5, h6, p, ul, hr) {
        transition: var(--pico-transition);
    }
</style>
