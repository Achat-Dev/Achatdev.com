<!-- Hamburger icon animation based on the one from Erik Terwan (https://codepen.io/erikterwan/pen/EVzeRP), licensed under the MIT license -->

<script lang="ts">
    import { onMount } from "svelte";
    import { slide } from "svelte/transition";
    import { projects, socialMedia } from "$lib/data.js"

    let isOpen: boolean = $state(false);
    let screenWidth: number = $state(0);
    let axis: "x" | "y" = $derived(screenWidth <= 768 ? "y" : "x");

    let hamburgerBars: HTMLCollectionOf<Element>;

    /**
     * Toggles the open state of the hamburger menu
     */
    function toggleIsOpen(): void {
        isOpen = !isOpen;
        for (let i = 0; i < hamburgerBars.length; i++) {
            hamburgerBars[i].classList.toggle(`hamburger-bar-selected-${i}`);
        }
    }

    onMount(() => {
        hamburgerBars = document.getElementsByClassName("hamburger-bar");
    })
</script>

<svelte:window bind:innerWidth={screenWidth}/>

<button class="invisible-button accordion-container" onclick={toggleIsOpen}>
    <div class="hamburger-icon">
        <span class="hamburger-bar bar-0"></span>
        <span class="hamburger-bar bar-1"></span>
        <span class="hamburger-bar bar-2"></span>
    </div>
    {#if isOpen}
        <div class="content-container">
            <div class="content-slider" transition:slide={{ axis: axis }}>
                <a href="/">Home</a>
                {#each projects as { slug, name }}
                    <a href="/{slug}">{name}</a>
                {/each}
                {#each socialMedia as { url, name }}
                    <a href="{url}" target="_blank">{name}</a>
                {/each}
            </div>
        </div>
	{/if}
</button>

<style>
    a {
        white-space: nowrap;
        font-size: 15px;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    .accordion-container {
        position: absolute;
        top: 0px;
        left: 0px;
        height: 1.1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px;
        padding: 2px 0px 0px 0px;
        z-index: 999;
    }

    .content-slider {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    .hamburger-icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
        cursor: pointer;
    }

    .hamburger-bar {
        display: block;
        width: 20px;
        height: 2px;
        background-color: var(--text-colour);
        border-radius: 1rem;
        transition: transform var(--transition),
                    opacity var(--transition);
    }

    .accordion-container:hover .hamburger-bar {
        background-color: var(--accent-colour);
        transition: transform var(--transition),
                    background-color var(--transition),
                    opacity var(--transition);
    }

    .bar-0 {
        transform-origin: 0% 0%;
    }

    .bar-1 {
        transform-origin: 0% 100%;
    }

    .bar-2 {
        transform-origin: 0% 100%;
    }

    :global(.hamburger-bar-selected-0) {
        transform: rotate(45deg);
    }

    :global(.hamburger-bar-selected-1) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
    }

    :global(.hamburger-bar-selected-2) {
        transform: rotate(-45deg);
    }
</style>
