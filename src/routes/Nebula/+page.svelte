<script lang="ts">
    import Page from "$lib/page.svelte";

    let { data }: { data: Project } = $props();
</script>

<Page props={data}/>
