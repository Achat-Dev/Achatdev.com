<script>
    import { base } from "$app/paths"

    export let top
    export let up
    export let down
    export let delay

    export let scale
    export let opacity
    export let blur
</script>

<div class="scroll-indicator-arrow-container" style="--top: {top}; --up: {up}; --down: {down}; --delay: {delay}; --scale: {opacity <= 0.0 ? 0.0 : scale}; --opacity: {opacity}; --blur: {blur}rem">
    <img src="{base}/icons/arrow-down.svg" alt="An arrow pointing downwards, indicating that one can sroll down" class="img-invertible">
</div>

<style>
    .scroll-indicator-arrow-container {
        position: absolute;
        top: var(--top);
        width: 1.7rem;
        height: 1.7rem;
        scale: var(--scale);
        opacity: var(--opacity);
        filter: blur(var(--blur));
        animation: bop 4s linear var(--delay) infinite;
    }

    @keyframes bop {
        0% {
            top: var(--top);
        }
        5% {
            top: var(--up);
        }
        10% {
            top: var(--down);
        }
        12%, 100% {
            top: var(--top);
        }
    }
</style>