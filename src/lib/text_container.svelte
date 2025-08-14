<script lang="ts">
    interface TextContainerProps {
        title: string;
        text?: string;
        children?: any;
    }

    let { title, text, children }: TextContainerProps = $props();
</script>

<div class="text-container">
    <h1>{title}</h1>
    <div class="flex-horizontal">
        <div class="vertical-line"></div>
        <div class="flex-vertical">
            {#if text}
                {@html text}
            {/if}
            {#if children}
                {@render children()}
            {/if}
        </div>
    </div>
</div>

<style>
    .text-container {
        width: 60%;
        padding: 2rem 2rem 2rem 0px;
    }
</style>
