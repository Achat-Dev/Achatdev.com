class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="footer-darkmode preload" id="footer-darkmode">
            <a href="https://twitter.com/AchatDev" target="_blank">
                <img src="/content/images/twitter-icon.svg" alt="Twitter icon" class="footer-icon footer-icon-dark preload">
            </a>
            <a href="https://achat.itch.io" target="_blank" >
                <img src="/content/images/itchio-textless-black.svg" alt="Itch.io icon" class="footer-icon footer-icon-dark preload">
            </a>
            <a href="https://www.youtube.com/channel/UChpiu3eD8Z2w7IjnxWB6CsQ" target="_blank">
                <img src="/content/images/youtube-icon.svg" alt="Youtube icon" class="footer-icon footer-icon-dark preload">
            </a>
        </div>
        <div class="footer preload" id="footer">
            <a href="https://twitter.com/AchatDev" target="_blank">
                <img src="/content/images/twitter-icon.svg" alt="Twitter icon" class="footer-icon preload">
            </a>
            <a href="https://achat.itch.io" target="_blank">
                <img src="/content/images/itchio-textless-black.svg" alt="Itch.io icon" class="footer-icon preload">
            </a>
            <a href="https://www.youtube.com/channel/UChpiu3eD8Z2w7IjnxWB6CsQ" target="_blank">
                <img src="/content/images/youtube-icon.svg" alt="Youtube icon" class="footer-icon preload">
            </a>
        </div>
        `;
    }
}

customElements.define('a-footer', Footer);
