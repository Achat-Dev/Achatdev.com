<script>
    import ErrorPage from "$lib/error_page.svelte";
    import { page } from "$app/state";
</script>

<ErrorPage status={page.status} message={page.error?.message}/>
