<script>
    import "@picocss/pico/css/pico.css"

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
</script>

<title>Achats Works</title>

<div class="layout-mode-container">
    <button class="layout-mode-trigger" on:click={toggleTheme}>
        <div class="layout-mode-icon"></div>
    </button>
</div>

<style>
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
</style>

<slot/>