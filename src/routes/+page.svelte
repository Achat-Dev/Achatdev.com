<script>
    import { projects } from "$lib/assets/data.json"
    import Project from "$lib/project.svelte"
    import Footer from "$lib/footer.svelte"
</script>

<div class="slide-container">
    <div class="page-container">
        <h1>Hi, I am Achat</h1>
        <h4>I like game development and complex systems</h4>
    </div>
</div>

{#each projects as { header, description, images }}
    <Project {header} {description} {images}/>
{/each}

<Footer/>

<style>
    .page-container {
        width: 80%;
        text-align: center;
    }
</style>
