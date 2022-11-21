"use strict"

const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i); 
    },
    Blackbery: function() {
        return navigator.userAgent.match(/Blackbery/i); 
    },
    iOS: function() {
        return navigator.userAgent.match(/iOS/i); 
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera/i); 
    },
    Windows: function() {
        return navigator.userAgent.match(/Windows/i); 
    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.Blackbery() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    },
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

} else {
    document.body.classList.add('_pc'); 
}