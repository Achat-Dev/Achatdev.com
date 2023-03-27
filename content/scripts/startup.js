let toggle;
let body;
let footer;
let footerDarkmode;
let inverts;
let lightMode = true;
const PRELOAD = "preload"

window.addEventListener("DOMContentLoaded", function() {
    lightMode = JSON.parse(localStorage.getItem("mode"));
    body = document.body;
    toggle = document.getElementById("mode-toggle");
    footer = document.getElementById("footer");
    footerDarkmode = document.getElementById("footer-darkmode");
    inverts = document.getElementsByClassName("invert");
    setTimeout(function(){
        body.classList.remove(PRELOAD);
        toggle.classList.remove(PRELOAD);
        footer.classList.remove(PRELOAD);
        footerDarkmode.classList.remove(PRELOAD);
        for (const invert of inverts) {
            invert.classList.remove(PRELOAD)
        }
    }, 100)
    if (lightMode === true) {
        activateLightMode();
    }
    else {
        activateDarkMode();
    }
});

function toggleDarkMode() {
    if (lightMode === true) {
        activateDarkMode();
    }
    else {
        activateLightMode();
    }

    localStorage.setItem("mode", lightMode);
}

function activateLightMode() {
    body.classList.remove("body-dark");
    footer.classList.remove("footer-dark");
    footerDarkmode.classList.remove("footer-darkmode-dark");
    toggle.classList.add("sun");
    toggle.classList.remove("moon");
    for (const invert of inverts) {
        invert.classList.add("invert-mode")
    }

    lightMode = true;
}

function activateDarkMode() {
    body.classList.add("body-dark");
    footer.classList.add("footer-dark");
    footerDarkmode.classList.add("footer-darkmode-dark");
    toggle.classList.remove("sun");
    toggle.classList.add("moon");
    for (const invert of inverts) {
        invert.classList.remove("invert-mode")
    }

    lightMode = false;
}
