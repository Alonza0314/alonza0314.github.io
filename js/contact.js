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
    var ci = document.getElementById("contact-info");
    var cien = document.getElementById("contact-info-en");
    
    if (ci.style.display === "none") {
        ci.style.display = "block";
        cien.style.display = "none";
    } else {
        ci.style.display = "none";
        cien.style.display = "block";
    }
}

