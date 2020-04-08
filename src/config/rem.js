!function() {
    function a() {
        var clientWidth = document.documentElement.clientWidth > 640 ? 640 : document.documentElement.clientWidth;
        document.documentElement.style.fontSize = clientWidth / 7.5 + "px";
        var div = document.createElement("div");
        div.style.width = "7.5rem";
        document.body.appendChild(div);
        document.documentElement.style.fontSize = document.documentElement.style.fontSize.replace("px", "") * clientWidth / div.clientWidth + "px";
        document.body.removeChild(div);
    }
    var b = null;
    window.addEventListener("resize", function() {
        clearTimeout(b), b = setTimeout(a, 300)
    }, !1), a()
}(window);
