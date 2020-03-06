function showDiv(id) {
    if (document.getElementById(id).style.visibility.localeCompare("hidden") == 0) {
        document.getElementById(id).style.visibility = "visible";
        document.getElementById(id).style.height = "730px";
    } else {
        document.getElementById(id).style.visibility = "hidden";
        document.getElementById(id).style.height = "0px";
    }
}