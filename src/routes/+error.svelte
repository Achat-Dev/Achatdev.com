<script lang="ts">
    import { page } from '$app/state';
    import ErrorPage from '$lib/error_page.svelte';
</script>

<ErrorPage status={page.status} message={page.error?.message} />
