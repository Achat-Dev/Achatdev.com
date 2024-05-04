<script>
    export let header
    export let y
</script>

<div class="jump-point-container">
    <div class="jump-point" on:click={() => window.scrollTo(0, y)}></div>
    <div class="jump-point-header">{header}</div>
</div>

<style>
    .jump-point-container {
        padding-right: 10px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
        height: 1rem;
    }

    .jump-point {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        background-color: var(--pico-color);
        transition: var(--icon-transition);
    }

    .jump-point:hover {
        scale: 1.2;
    }

    .jump-point-header {
        font-size: large;
        user-select: none;
        opacity: 0;
        visibility: collapse;
        transition: var(--icon-transition);
    }

    :global(.jump-point:hover + .jump-point-header) {
        opacity: 1;
        visibility: visible;
        transition: var(--icon-transition);
    }
</style>