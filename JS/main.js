function doDisplay() {
    var displayState = document.getElementById("menu");
    if(displayState.style.display=="none") {
        displayState.style.display = "block"
    }
    else {
        displayState.style.display = "none";
    }
}