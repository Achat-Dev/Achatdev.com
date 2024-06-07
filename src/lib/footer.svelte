<script>
    import { socialMedia } from "$lib/assets/data.json"
    import { base } from "$app/paths"
    import ScrollIndicator from "./scrollIndicator/scrollIndicator.svelte"
</script>

<div class="slide-container">
    <div class="footer-container">
        <h1>Well, that's it :)</h1>
        <div class="icon-container">
            {#each socialMedia as { url, src, alt }}
            <div class="icon-content">
                <a href="{url}" target="_blank">
                    <img src="{base}/{src}" alt="{alt}" class="img-invertible">
                </a>
            </div>
            {/each}
        </div>
    </div>
    <ScrollIndicator/>
</div>

<style>
    a {
        justify-content: center;
    }

    img {
        height: 1rem;
        width: 1rem;
        transition-property: scale !important;
        transition: var(--icon-transition) !important;
    }

    img:hover {
        scale: 1.15;
    }

    .footer-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .icon-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .icon-content {
        text-align: center;
        width: 2rem;
        height: 2rem;
    }
</style>
