<script>
    import { base } from "$app/paths"

    export let header
    export let description
    export let images
</script>

<div class="slide-container">
    <div class="project-container">
        <div class="project-content">
            <h1>{header}</h1>
            <hr/>
            {@html description}
        </div>
        {#each images as { src, alt, transform }}
            <img src="{base}/{src}" alt="{alt}" style="--transform: {transform}"/>
        {/each}
    </div>

    <hr style="width: 90%;"/>
</div>

<style>
    h1 {
        text-align: center;
    }

    img {
        position: absolute;
        transform: var(--transform);
    }

    .project-container {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .project-content {
        width: 70%;
        padding: 3rem;
        z-index: 1;
    }

    @media only screen and (max-width: 1450px) {
        .project-content {
            width: 80%;
        }
    }

    @media only screen and (max-width: 1000px) {
        .project-content {
            width: 90%;
        }
    }

    @media only screen and (max-width: 600px) {
        .project-container {
            font-size: small;
        }
        
        .project-content {
            width: 95%;
        }
    }

    @media only screen and (max-width: 500px) {
        .project-container {
            font-size: smaller;
        }
        
        .project-content {
            width: 100%;
        }
    }
</style>
