<script lang="ts">
    import '../app.css'
    import { onMount } from 'svelte';
    import HamburgerMenu from '$lib/hamburger_menu.svelte';
    import ModeIcon from '$lib/mode_icon.svelte';
    import { variables } from '$lib/variables.svelte';

    let { children } = $props();

    let screenWidth: number = $state(2.0);
    let screenHeight: number = $state(2.0);
    
    onMount(() => {
        if (localStorage.getItem('dark-mode') == null) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('dark-mode', 'true');
            }
        }
        else if (localStorage.getItem('dark-mode') === 'true') {
            document.body.classList.add('dark-mode');
        }
    });
</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight}/>

{#if screenWidth <= 768}
    <ModeIcon/>
    <HamburgerMenu/>
{/if}

<div class="page-container" bind:clientWidth={variables.contentWidth} bind:clientHeight={variables.contentHeight}>
    <div class="card-container">
        {#if screenWidth > 768}
            <ModeIcon/>
            <HamburgerMenu/>
        {/if}
        {@render children()}
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
        position: relative;
        width: 55%;
        min-height: 50%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 3rem;
        border-radius: 2rem;
        filter: drop-shadow(0 0 2rem var(--shadow-colour));
    }

    :global(.justify-center) {
        justify-content: center !important;
    }
</style>
