// ==UserScript==
// @name         YouTube like button percentage
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Gives you a rough like/view percentage next to the like button, e.g. "7.01" since YouTube removed the dislike ratio. Helps you stop wasting time on bad videos that are just fishing for views.
// @author       Seph Soliman
// @match        https://www.youtube.com/watch?v=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let timer;
    timer = setInterval(() => {
        const pp = document.querySelectorAll('*[aria-label^="like this video"]')[0].parentElement.parentElement;
        window.pp = pp;
        const likesStr = pp.querySelector('[id=text]').textContent;
        const isK = String(likesStr).toLowerCase().includes('k');
        const likes = `${Number(likesStr.replace(/K$/i, '')) * (isK ? 1000 : 1)}`;
        const views=document.querySelectorAll('.ytd-video-view-count-renderer.view-count')[0].textContent.replace(/ views$/, '').replace(/,/g, '');
        let vr = document.getElementById('view-rate');
        if (!vr) {
            vr = document.createElement('div');
            vr.setAttribute('id', 'view-rate');
            const vc = document.querySelectorAll('.ytd-video-view-count-renderer.view-count');
            pp.insertBefore(vr, pp.childNodes[0]);
        }
        vr.innerText = `${Number(likes/views*100).toFixed(2)}`;
        window.views = views;
        window.likes = likes;
        //clearInterval(timer);
    }, 1000);
})();
