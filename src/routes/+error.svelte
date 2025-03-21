<script lang="ts">
    import { page } from '$app/state';
    import { onMount, onDestroy } from 'svelte';

    onMount(() => {
        document.getElementsByClassName('card-container')[0].classList.add('justify-center');
    });

    onDestroy(() => {
        document.getElementsByClassName('card-container')[0].classList.remove('justify-center');
    });
</script>

<title>Oh no, it's a [{page.status}]</title>

<div class="fallback-container">
    <h1>[{page.status}]<br>{page.error!.message}</h1>
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
