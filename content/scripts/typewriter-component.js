class Typewriter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let text = this.innerText;
        let speed = checkForAttribute(this, "speed", 2);
        let caretSpeed = parseFloat(speed) + 1;
        let fontStyle = checkForAttribute(this, "font-style", "italic");
        let steps = checkForAttribute(this, "steps", 40);
        let mode = JSON.parse(localStorage.getItem("mode"));
        let delay = checkForAttribute(this, "delay", 0);
        let caretColour;
        if (mode === true) {
            caretColour = "black";
        }
        else {
            caretColour = "white";
        }
        this.innerHTML = `
        <style>
        @keyframes typing {
            from { width: 0 }
            to { width: 100% }
        }
        
        @keyframes caret {
            from { border-color: transparent }
            0.01% { border-color: ${caretColour} }
            99% { border-color: ${caretColour} }
            100% { border-color: transparent }
        }
        </style>

        <div style="
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
        ">
            <div style="height: 100%;"></div>
            <div class="height: 100%;">
                <p style="
                    text-align: center;
                    font-style: ${fontStyle};
                    font-family: 'Courier';
                
                    overflow: hidden;
                    white-space: nowrap;
                    margin: 0 auto;
                    border-right: 0.12em solid transparent;
                    letter-spacing: 0.1em;
                    animation: typing ${speed}s steps(${steps}, end),
                                caret ${caretSpeed}s steps(${steps}, end);
                    animation-delay: ${delay}s;
                    animation-fill-mode: both;
                ">${text}</p>
            </div>
            <div style="height: 100%;"></div>
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

customElements.define('a-typewriter', Typewriter);
