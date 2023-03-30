class SSDownloadComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let text = this.innerText;
        let ending = checkForAttribute(this, "ending", "png");
        this.innerHTML = `
        <div class="grid-element">
            <img class="grid-image" src="/content/images/thescuffedseries/screenshots/screenshot_ss${text}.${ending}" alt="The Scuffed Series ${text} - Screenshot">
            <div class="grid-widget">
                <img class="grid-widget-icon" src="/content/images/thescuffedseries/icons/icon_ss${text}.png" alt="The Scuffed Series ${text} - Icon">
                <a type="button" href="https://achat.itch.io/the-scuffed-series-${text}" target="_blank">Download on itch.io</a>
            </div>
        </div>
        `;
    }
}

function checkForAttribute(element, name, defaultValue) {
    if (element.hasAttribute(name)) {
        return element.getAttribute(name);
    }
    else {
        return defaultValue;
    }
}

customElements.define('a-ssdownload', SSDownloadComponent);
