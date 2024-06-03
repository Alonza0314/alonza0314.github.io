function Language() {
    var rc = document.getElementById("right-content");
    var rcen = document.getElementById("right-content-en");
    
    var about = document.getElementById("about")
    var abouten = document.getElementById("about-en")
    
    if (rc.style.display === "none") {
        rc.style.display = "block";
        rcen.style.display = "none";
    } else {
        rc.style.display = "none";
        rcen.style.display = "block";
    }

    if (about.style.display === "none") {
        about.style.display = "flex";
        abouten.style.display = "none";
    } else {
        about.style.display = "none";
        abouten.style.display = "flex";
    }
}

