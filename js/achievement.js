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

document.addEventListener('DOMContentLoaded', function() {
    var promajor = document.getElementById("pro-major");
    var social = document.getElementById("social");
    var others = document.getElementById("others");

    var promajordescribe = document.getElementById("pro-major-describe");
    var socialdescribe = document.getElementById("social-describe");
    var othersdescribe = document.getElementById("others-describe");
    
    promajor.addEventListener('click', function() {
        promajordescribe.style.display = "block";
        socialdescribe.style.display = "none";
        othersdescribe.style.display = "none";
    });
    social.addEventListener('click', function() {
        promajordescribe.style.display = "none";
        socialdescribe.style.display = "block";
        othersdescribe.style.display = "none";
    });
    others.addEventListener('click', function() {
        promajordescribe.style.display = "none";
        socialdescribe.style.display = "none";
        othersdescribe.style.display = "block";
    });
});

