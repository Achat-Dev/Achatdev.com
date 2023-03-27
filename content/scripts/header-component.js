class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="header">

            <div class="hamburger">
                <a href="javascript:void(0)" class="hamburger-icon" onclick="toggleHamburger()">
                    <div class="hamburger-line"></div>
                    <div class="hamburger-line"></div>
                    <div class="hamburger-line"></div>
                </a>
                <div class="hamburger-link-holder" id="hamburger-link-holder" style="transform: translateY(-250px);">
                    <div class="hambuger-link-row">
                        <a href="/index.html" class="hamburger-link">Home</a>
                    </div>
                    <div class="hambuger-link-row">
                        <a href="https://achat.itch.io" target="_blank" class="hamburger-link">Works</a>
                    </div>
                    <div class="hambuger-link-row">
                        <a href="/thescuffedseries/index.html" class="hamburger-link">The Scuffed Series</a>
                    </div>
                    <div class="hamburger-link-shadow"></div>
                </div>
            </div>

            <div class="navbar-fill"></div>
            <div class="navbar">
                <a href="https://achat.itch.io" target="_blank">Works</a>
            </div>
            <div class="navbar-avatar">
                <a href="/index.html">
                    <img src="/content/images/avatar.png" alt="Achat avatar" id="avatar">
                </a>
            </div>
            <div class="navbar">
                <a href="/thescuffedseries/index.html">The Scuffed Series</a>
            </div>
            <div class="navbar-fill"></div>

        </div>
        
        <div class="mode">
            <div class="mode-checkbox" onclick="toggleDarkMode()">
                <div class="sun preload" id="mode-toggle">
            </div>
        </div>
        `;
    }
}

function toggleHamburger() {
    let element = document.getElementById("hamburger-link-holder");
    if (element.style.transform === "translateY(-250px)") {
        element.style.transform = "translateY(0px)";
    }
    else {
        element.style.transform = "translateY(-250px)"
    }
}

customElements.define('a-header', Header);
