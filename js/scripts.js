var hamState = false;
var hamMenuItems = document.getElementsByClassName("hamMenuPre1stClick");
function hamOpenClose() {
    if (hamState === false) {
    document.getElementById("hamLine1").className = "hamLine1Opening";
    document.getElementById("hamLine2").className = "hamLine2Opening";
    document.getElementById("hamLine3").className = "hamLine3Opening";
    for (i = 0; i < hamMenuItems.length; i++) {
                hamMenuItems[i].className = "hamMenuVisible";
            }
    hamState = true;
    } else {
    document.getElementById("hamLine1").className = "hamLine1Closing";
    document.getElementById("hamLine2").className = "hamLine2Closing";
    document.getElementById("hamLine3").className = "hamLine3Closing";
    for (i = 0; i < hamMenuItems.length; i++) {
        hamMenuItems[i].className = "hamMenuHidden";
    }
    hamState = false;
    }
}