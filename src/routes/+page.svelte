<script lang="ts">
    import TextContainer from '$lib/text_container.svelte';
    import { projects } from '$lib/data.js'
</script>

<svelte:head>
    <title>Achat's Works</title>
</svelte:head>

<TextContainer title={"Hi and welcome"} text={`
    <p>My name is Achat and I'm a software and game developer from Germany with skills ranging from web development over library and software development to game and graphics programming.</p>
    <p>I have a passion for creating complex systems and learning new technologies.</p>`
}/>

<div class="project-container">
    <h3>Projects</h3>
    <div class="flex-horizontal">
        <div class="vertical-line"></div>
        <div class="flex-vertical">
            {#each projects as { slug, name }}
                <p><a href="/{slug}">{name}</a></p>
            {/each}
        </div>
    </div>
</div>

<style>
    a:hover {
        margin-left: 0.3rem;
    }

    .project-container {
        width: 27%;
    }

    .vertical-line {
        width: 7px;
        max-width: 7px;
        min-width: 7px;
        background-color: var(--accent-colour);
        margin: 0.5rem 1rem 0.5rem 0px;
        border-radius: 1rem;
    }
</style>
