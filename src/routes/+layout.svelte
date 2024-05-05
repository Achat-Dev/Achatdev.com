<script>
    import "@picocss/pico/css/pico.css"
    import { onMount } from "svelte"

    function toggleTheme() {
        const element = document.querySelector("html")
        const theme = element.getAttribute("data-theme")
        if (theme == "light") {
            element.setAttribute("data-theme", "dark")
            localStorage.setItem("data-theme", "dark")
        }
        else {
            element.setAttribute("data-theme", "light")
            localStorage.setItem("data-theme", "light")
        }
    }

    onMount(() => {
        let dataTheme = localStorage.getItem("data-theme")
        if (dataTheme === null) {
            dataTheme = "light"
        }
        document.documentElement.setAttribute("data-theme", dataTheme)
    })
</script>

<title>Achats Works</title>

<div class="layout-mode-container">
    <button class="layout-mode-trigger" on:click={toggleTheme}>
        <div class="layout-mode-icon"></div>
    </button>
</div>

<style>
    :root {
        --pico-font-family: "Lato", Helvetica, Arial, sans-serif;
        --pico-transition: 0.5s ease-in-out;
        --icon-transition: 0.1s linear;
        scroll-behavior: smooth;
        transition: var(--pico-transition);
        overflow-x: hidden;
    }

    .layout-mode-container {
        position: fixed;
        top: 10px;
        right: 10px;
        width: 22px;
        height: 22px;
        z-index: 999;
    }

    .layout-mode-trigger {
        width: inherit;
        height: inherit;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: transparent;
        background-color: transparent;
        border: none;
        box-shadow: none;
    }

    :global([data-theme="light"] .layout-mode-icon) {
        height: 50%;
        width: 50%;
        background-color: black;
        border-radius: 50%;
        box-shadow: 10px 0 0 -4px black,
                -10px 0 0 -4px black,
                0 10px 0 -4px black,
                0 -10px 0 -4px black,
                7.5px 7.5px 0 -4px black,
                7.5px -7.5px 0 -4px black,
                -7.5px 7.5px 0 -4px black,
                -7.5px -7.5px 0 -4px black;
        transition: var(--pico-transition);
    }

    :global([data-theme="dark"] .layout-mode-icon) {
        height: 60%;
        width: 60%;
        background-color: transparent;
        border-radius: 50%;
        box-shadow: -4px 4px 0 0px white;
        transform: translate(5px, -5px);
        transition: var(--pico-transition);
    }

    :global(.slide-container) {
        position: sticky;
        top: 0px;
        margin-top: var(--margin);
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    :global([data-theme="light"] .background-gradient) {
        background-image: linear-gradient(155deg, rgba(200, 200, 200, 0.0), rgba(230, 225, 235, 0.1));
        transition: var(--pico-transition);
    }

    :global([data-theme="dark"] .background-gradient) {
        background-image: linear-gradient(155deg, rgba(200, 200, 200, 0.0), rgba(205, 200, 210, 0.1));
        transition: var(--pico-transition);
    }

    :global(div) {
        overflow: hidden;
    }

    :global(a:hover) {
        transition: var(--icon-transition);
    }
    
    :global(a:not(a:hover)) {
        transition: var(--icon-transition);
    }

    :global(h1, h2, h3, h4, h5, h6, p, ul, hr) {
        transition: var(--pico-transition);
    }
</style>

<slot/>