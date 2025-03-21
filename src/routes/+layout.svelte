<script lang="ts">
    import '../app.css'
    import { onMount } from 'svelte';
    import HamburgerMenu from '$lib/hamburger_menu.svelte';
    import ModeIcon from '$lib/mode_icon.svelte';

    let screenWidth: number = 2.0;
    let screenHeight: number = 2.0;
    let mousePosition: Position = { x: 1.0, y: 1.0 };

    /**
     * Sets the mouse position
     * @param event The svelte mouse move event
     */
    function setMousePositon(event: MouseEvent): void {
        mousePosition.x = event.clientX;
        mousePosition.y = event.clientY;
    }

    onMount(() => {
        if (localStorage.getItem('dark-mode') === 'true') {
            document.body.classList.add('dark-mode');
        }
    });
</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} on:mousemove={setMousePositon}/>

{#if screenWidth <= 768}
    <ModeIcon/>
    <HamburgerMenu/>
{/if}

<div class="page-container">
    <div class="card-container">
        {#if screenWidth > 768}
            <ModeIcon/>
            <HamburgerMenu/>
        {/if}
        <slot />
    </div>
</div>

<style>
    :global(body.dark-mode img.img-invertible) {
        filter: invert();
    }

    .page-container {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .card-container {
        width: 55%;
        min-height: 50%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-radius: 2rem;
        filter: drop-shadow(0 0 2rem var(--shadow-colour));
        gap: 3rem;
    }

    :global(.justify-center) {
        justify-content: center !important;
    }
</style>
