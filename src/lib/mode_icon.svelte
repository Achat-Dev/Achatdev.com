<script lang="ts">
    /**
     * Toggles the dark mode state and writes the value to the local storage
     */
    function toggleDarkMode(): void {
        const classList = document.body.classList;
        if (classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'false');
        }
        else {
            localStorage.setItem('dark-mode', 'true');
        }
        classList.toggle('dark-mode');
    }
</script>

<div class="mode-container">
    <button class="invisible-button mode-button" on:click={toggleDarkMode}>
        <div class="mode-icon"></div>
    </button>
</div>

<style>
    .mode-container {
        position: absolute;
        top: 0px;
        right: 0px;
        width: 22px;
        height: 22px;
    }

    .mode-button {
        width: inherit;
        height: inherit;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: var(--icon-transition);
    }

    .mode-icon {
        height: 50%;
        width: 50%;
        background-color: var(--text-colour);
        border-radius: 50%;
        box-shadow: 10px 0 0 -4px var(--text-colour),
                -10px 0 0 -4px var(--text-colour),
                0 10px 0 -4px var(--text-colour),
                0 -10px 0 -4px var(--text-colour),
                7.5px 7.5px 0 -4px var(--text-colour),
                7.5px -7.5px 0 -4px var(--text-colour),
                -7.5px 7.5px 0 -4px var(--text-colour),
                -7.5px -7.5px 0 -4px var(--text-colour);
                transition: var(--transition);
    }

    :global(body.dark-mode .mode-icon) {
        height: 60% !important;
        width: 60% !important;
        background-color: transparent !important;
        border-radius: 50% !important;
        box-shadow: -4px 4px 0 0px var(--text-colour) !important;
        transform: translate(5px, -5px) !important;
    }

    :global(body.dark-mode .mode-button:hover .mode-icon) {
        box-shadow: -4px 4px 0 0px var(--accent-colour) !important;
    }

    :global(body:not(.dark-mode) .mode-button:hover .mode-icon) {
        background-color: var(--accent-colour);
        box-shadow: 10px 0 0 -4px var(--accent-colour),
                -10px 0 0 -4px var(--accent-colour),
                0 10px 0 -4px var(--accent-colour),
                0 -10px 0 -4px var(--accent-colour),
                7.5px 7.5px 0 -4px var(--accent-colour),
                7.5px -7.5px 0 -4px var(--accent-colour),
                -7.5px 7.5px 0 -4px var(--accent-colour),
                -7.5px -7.5px 0 -4px var(--accent-colour);
    }
</style>
