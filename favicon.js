if (window.matchMedia("(prefers-color-scheme: dark)")) {
    console.log ("dark mode is enabled");
}

window.matchMedia("(prefers-color-scheme: dark)").addListener(function () {
    console.log ("changed to dark mode")
})

function applyIcon (type) {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';

    if (type === "dark") {
        link.href = 'images/favicon_dark.png';
    } else {
        link.href = '/favicon.png';
    }

    document.getElementsByTagName('head')[0].appendChild(link);
}

var dmQuery = window.matchMedia("(prefers-color-scheme: dark)");
var lmQuery = window.matchMedia("(prefers-color-scheme: light)");

if (dmQuery.matches) {
    applyIcon("dark");
}

dmQuery.addListener(function(){
    applyIcon("dark")
});

lmQuery.addListener(function(){
    applyIcon("light");
});