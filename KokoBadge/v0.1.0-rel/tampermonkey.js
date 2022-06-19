// ==UserScript==
// @name         KokoBadge
// @namespace    http://github.com/sudokoko
// @version      0.1.0-rel
// @description  Allows remote partnering and verification of Discord Servers (shows badge, features are not accessible)
// @author       sudokoko
// @match        https://discord.com/*
// @match        https://discord.com/channels/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {

    // set a delay to compensate for client authentication
    setTimeout(() => { injectItrScript(); document.addEventListener("dblclick", injectItrScript); }, 15000); // ensures page loads before running script

    function injectItrScript() {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://kokocord-scripts-lib.glitch.me/serverBadges.js';
            script.addEventListener('load', resolve);
            script.addEventListener('error', e => reject(e.error));
            document.head.appendChild(script);
            console.warn("###### SCRIPT LOADED #######");
            console.warn("A remote script at this address was loaded:");
            console.warn("https://kokocord-scripts-lib.glitch.me/serverBadges.js");
        });
    }
})();
