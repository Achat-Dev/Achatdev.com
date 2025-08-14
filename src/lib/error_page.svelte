<script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    interface ErrorPageProps {
        status: number;
        message?: string;
    }

    let { status, message }: ErrorPageProps = $props();

    onMount(() => {
        document.getElementsByClassName('card-container')[0].classList.add('justify-center');
    });

    onDestroy(() => {
        document.getElementsByClassName('card-container')[0].classList.remove('justify-center');
    });
</script>

<title>Oh no, it's a [{status}]</title>

<div class="fallback-container">
    <h1>[{status}]<br>{message}</h1>
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
