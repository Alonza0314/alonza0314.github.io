
document.addEventListener('DOMContentLoaded', function() {
    var languageSwitcherZH = document.getElementById('languageSwitcherZH');
    var languageSwitcherEN = document.getElementById('languageSwitcherEN');
    
    languageSwitcherZH.addEventListener('click', function(event) {
        event.preventDefault();
        topbarLanguage();
        bottombarLanguage();
        Language();
    });
    
    languageSwitcherEN.addEventListener('click', function(event) {
        event.preventDefault();
        topbarLanguage();
        bottombarLanguage();
        Language();
    });
});

function Language() {
    var n = document.getElementById("now");
    var nen = document.getElementById("now-en");

    var li = document.getElementById("logol-isia");
    var lien = document.getElementById("logol-isia-en");

    if (n.style.display === "none") {
        n.style.display = "flex";
        nen.style.display = "none";
    } else {
        n.style.display = "none";
        nen.style.display = "flex";
    }

    if (li.style.display === "none") {
        li.style.display = "flex";
        lien.style.display = "none";
    } else {
        li.style.display = "none";
        lien.style.display = "flex";
    }
}

