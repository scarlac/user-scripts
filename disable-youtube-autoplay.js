// ==UserScript==
// @name         Disable Youtube autoplay
// @description  Disable Youtube's autoplay setting by checking if it's enabled every 10 seconds and clicking the button if so. Apparently YouTube really like user-hostile UX by ignoring explicit user preferences.
// @include      https://*.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function toggleAutoplayIfOn() {
        let autoplayButton = document.getElementsByClassName('ytp-autonav-toggle-button')[0];
        let autoplayEnabled = autoplayButton && autoplayButton.getAttribute('aria-checked') === 'true';
        if (autoplayEnabled) {
            console.log("Greasemonkey script 'Disable Youtube autoplay' will now try to toggle autoplay off.");
            autoplayButton.click();
        }
    }

    toggleAutoplayIfOn();
    setInterval(toggleAutoplayIfOn, 10000);
})();
