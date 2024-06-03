function Language() {
    var hpl = document.getElementById("head-part-left");
    var hplen = document.getElementById("head-part-left-en");

    var bp = document.getElementById("body-part");
    var bpen = document.getElementById("body-part-en");

    var c = document.getElementById("current");
    var cen = document.getElementById("current-en");
    
    if (hpl.style.display === "none") {
        hpl.style.display = "flex";
        hplen.style.display = "none";
    } else {
        hpl.style.display = "none";
        hplen.style.display = "flex";
    }
    
    if (bp.style.display === "none") {
        bp.style.display = "flex";
        bpen.style.display = "none";
    } else {
        bp.style.display = "none";
        bpen.style.display = "flex";
    }

    if (c.style.display === "none") {
        c.style.display = "flex";
        cen.style.display = "none";
    } else {
        c.style.display = "none";
        cen.style.display = "flex";
    }
}

