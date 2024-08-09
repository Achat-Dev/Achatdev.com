<script>
    import { base } from '$app/paths';
    import { beforeNavigate, afterNavigate } from '$app/navigation';
    import { onDestroy } from 'svelte';
    import TextContainer from '$lib/text_container.svelte';

    export let data;

    /** @type {number} */
	const duration = 10000;

    /** @type {HTMLDivElement} */
    let imageContainer;
    /** @type {HTMLCollectionOf<HTMLDivElement>} */
    let slideshowButtons;
    /** @type {boolean} */
    let isSlideshowFullscreen = false;
    /** @type {number} */
    let currentIndex = 0;
    /** @type {number} */
    let elapsed = 0;
    /** @type {DOMHighResTimeStamp} */
	let lastTime;
    /** @type {number} */
	let frame;

    /**
     * Sets the index of the currently shown image
     * @param {number} index The target index
     */
    function setCurrentIndex(index) {
        index = Math.max(Math.min(index, data.images.length), 0);

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
    function openFullscreenSlideshow() {
        imageContainer.classList.add('image-container-fullscreen');
        document.getElementsByClassName('card-container')[0].classList.add('justify-center');
        isSlideshowFullscreen = true;
        document.getElementsByClassName('accordion-container')[0].style.zIndex = '0';
    }

    /**
     * Moves the slideshow back from fullscreen to its normal position
     */
    function closeFullscreenSlideshow() {
        imageContainer.classList.remove('image-container-fullscreen');
        document.getElementsByClassName('card-container')[0].classList.remove('justify-center');
        isSlideshowFullscreen = false;
        document.getElementsByClassName('accordion-container')[0].style.zIndex = '999';
    }

    beforeNavigate(() => {
        currentIndex = 0;
        lastTime = window.performance.now();
        elapsed = 0;
    });

    afterNavigate(() => {
        if (data.images.length > 1) {
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
            setCurrentIndex(currentIndex == data.images.length - 1 ? 0 : currentIndex + 1);
        }
		
        lastTime = time;
	})();
</script>

<title>{data.name}</title>

<TextContainer title={data.name} text={data.description}/>
<div class="image-container" bind:this={imageContainer}>
    {#if isSlideshowFullscreen}
        <button class="invisible-button close-fullscreen-button" on:click={closeFullscreenSlideshow}></button>
        <img class="fullscreen-image" src={base}/{data.images[currentIndex].src} alt={data.images[currentIndex].alt}>
    {:else}
        <button class="invisible-button image-button" on:click={openFullscreenSlideshow}>
            <img src={base}/{data.images[currentIndex].src} alt={data.images[currentIndex].alt} >
        </button>
    {/if}
    {#if data.images.length > 1}
        <div class="button-container">
            {#each { length: data.images.length } as _, i}
                <button class="invisible-button slideshow-button" on:click={() => setCurrentIndex(i)}></button>
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

    :global(.image-container-fullscreen) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute !important;
        width: 100vw !important;
        height: 100vh !important;
        background-color: var(--transparent-background-colour);
        z-index: 999;
    }

    .close-fullscreen-button {
        position: absolute;
        width: 100vw;
        height: 100vh;
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
