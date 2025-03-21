<script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    onMount(() => {
        document.getElementsByClassName('card-container')[0].classList.add('justify-center');
    });

    onDestroy(() => {
        document.getElementsByClassName('card-container')[0].classList.remove('justify-center');
    });
</script>

<title>Oh no, it's a [404]</title>

<div class="fallback-container">
    <h1>[404]<br>Not found</h1>
    <h4>Something's wrong... I'll call the admin!</h4>
</div>

<style>
    .fallback-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
</style>
