<script lang="ts">
    import { base } from '$app/paths';
    import { beforeNavigate, afterNavigate } from '$app/navigation';
    import { onDestroy } from 'svelte';
    import TextContainer from '$lib/text_container.svelte';
    import { variables } from './variables.svelte';

    let { props }: { props: Project } = $props();

    let isSlideshowFullscreen: boolean = $state(false);
    let currentIndex: number = $state(0);

    let imageContainer: HTMLDivElement;
    let slideshowButtons: HTMLCollectionOf<Element>;
    let elapsed: number = 0;
	let lastTime: DOMHighResTimeStamp = 0;
	let frame: number;

    const duration: number = 10000;

    /**
     * Sets the index of the currently shown image
     * @param index The target index
     */
    function setCurrentIndex(index: number): void {
        if (!slideshowButtons) {
            return;
        }

        index = Math.max(Math.min(index, props.images.length), 0);

        if (currentIndex != index) {
            slideshowButtons[currentIndex].classList.remove('slideshow-button-highlighted');
            slideshowButtons[index].classList.add('slideshow-button-highlighted');
        }
        currentIndex = index;
        elapsed = 0;
    }

    /**
     * Moves the slideshow to be in fullscreen
     */
    function openFullscreenSlideshow(): void {
        imageContainer.classList.add('image-container-fullscreen');
        document.getElementsByClassName('card-container')[0].classList.add('justify-center');
        isSlideshowFullscreen = true;
        const accordion = document.getElementsByClassName('accordion-container')[0] as HTMLElement;
        accordion.style.zIndex = '0';
        document.addEventListener("keydown", onKeyDown);
    }

    /**
     * Moves the slideshow back from fullscreen to its normal position
     */
    function closeFullscreenSlideshow(): void {
        imageContainer.classList.remove('image-container-fullscreen');
        document.getElementsByClassName('card-container')[0].classList.remove('justify-center');
        isSlideshowFullscreen = false;
        const accordion = document.getElementsByClassName('accordion-container')[0] as HTMLElement;
        accordion.style.zIndex = '999';
        document.removeEventListener("keydown", onKeyDown);
    }

    /**
     * Key down listener to close the fullscreen slideshow
     * @param event
     */
    function onKeyDown(event: KeyboardEvent) {
        if (event.key === 'Escape') {
            closeFullscreenSlideshow();
        }
    }

    beforeNavigate(() => {
        currentIndex = 0;
        lastTime = window.performance.now();
        elapsed = 0;
    });

    afterNavigate(() => {
        if (props.images.length > 1) {
            slideshowButtons = document.getElementsByClassName('slideshow-button');
            for (const slideshowButton of slideshowButtons) {
                slideshowButton.classList.remove('slideshow-button-highlighted');
            }
            slideshowButtons[0].classList.add('slideshow-button-highlighted');
        }

        currentIndex = 0;
        lastTime = window.performance.now();
        elapsed = 0;
    });

    onDestroy(() => {
        if (frame) {
            cancelAnimationFrame(frame);
        }
    });

	(function update() {
		frame = requestAnimationFrame(update);
		
        const time = window.performance.now();
		elapsed += Math.min(time - lastTime, duration - elapsed);
        if (elapsed >= duration) {
            setCurrentIndex(currentIndex == props.images.length - 1 ? 0 : currentIndex + 1);
        }
		
        lastTime = time;
	})();
</script>

<svelte:head>
    <title>{props.name}</title>
</svelte:head>

<TextContainer title={props.name} text={props.description}/>
<div class="image-container" bind:this={imageContainer} style="--fullscreen-width: {variables.contentWidth}px; --fullscreen-height: {variables.contentHeight}px">
    {#if isSlideshowFullscreen}
        <button class="invisible-button close-fullscreen-button" onclick={closeFullscreenSlideshow}></button>
        <img class="fullscreen-image" src="{base}/{props.images[currentIndex].src}" alt={props.images[currentIndex].alt}>
    {:else}
        <button class="invisible-button image-button" onclick={openFullscreenSlideshow}>
            <img src="{base}/{props.images[currentIndex].src}" alt={props.images[currentIndex].alt} >
        </button>
    {/if}
    {#if props.images.length > 1}
        <div class="button-container">
            {#each { length: props.images.length } as _, i}
                <button class="invisible-button slideshow-button" onclick={() => setCurrentIndex(i)}></button>
            {/each}
        </div>
    {/if}
</div>

<style>
    img {
        width: 100%;
    }

    img.fullscreen-image {
        width: 70%;
    }

    :global(div.image-container.image-container-fullscreen) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: var(--fullscreen-width) !important;
        height: var(--fullscreen-height) !important;
        z-index: 999;
    }

    .close-fullscreen-button {
        position: absolute;
        width: 100%;
        height: 100%;
        padding: 0;
        background-color: var(--background-colour);
        background-image: var(--background-gradient);
        opacity: 90%;
        z-index: -999;
    }

    .image-container {
        width: 40%;
    }
    
    .button-container {
        margin-top: 5px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 7px;
    }

    .slideshow-button {
        width: 1rem;
        height: 1rem;
        border-radius: 1rem;
        scale: 0.5;
        background: var(--text-colour);
        border-color: transparent;
        transition: var(--icon-transition);
        cursor: pointer;
    }

    .slideshow-button:hover {
        background: var(--accent-colour);
        scale: 0.7;
    }

    :global(.slideshow-button.slideshow-button-highlighted) {
        background: var(--highlight-colour);
        scale: 0.7;
    }

    .image-button {
        padding: 0px;
        margin: 0px;
        cursor: pointer;
    }
</style>
