// Navbar Transparent Color Change

var myNav = document.getElementById("navbar");
window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
        myNav.classList.add("scroll");
    } else {
        myNav.classList.remove("scroll");
    }
};