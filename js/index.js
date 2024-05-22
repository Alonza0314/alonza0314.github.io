document.addEventListener('DOMContentLoaded', function() {
    var languageSwitcherZH = document.getElementById('languageSwitcherZH');
    var languageSwitcherEN = document.getElementById('languageSwitcherEN');
    
    languageSwitcherZH.addEventListener('click', function(event) {
        event.preventDefault();
        topbarLanguage();
        bottombarLanguage();
        indexLanguage();
    });
    
    languageSwitcherEN.addEventListener('click', function(event) {
        event.preventDefault();
        topbarLanguage();
        bottombarLanguage();
        Language();
    });
});

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

