function Language() {
    var c = document.getElementById("container");
    var cen = document.getElementById("container-en");

    var promajordescribe = document.getElementById("pro-major-describe");
    var socialdescribe = document.getElementById("social-describe");
    var othersdescribe = document.getElementById("others-describe");

    var promajordescribeen = document.getElementById("pro-major-describe-en");
    var socialdescribeen = document.getElementById("social-describe-en");
    var othersdescribeen = document.getElementById("others-describe-en");

    if (c.style.display === "none") {
        c.style.display = "flex";
        cen.style.display = "none";
        if (socialdescribeen.style.display !== "block" && othersdescribeen.style.display !== "block") {
            promajordescribeen.style.display = "none";
            promajordescribe.style.display = "block";
            socialdescribe.style.display = "none";
            othersdescribe.style.display = "none";
        } else if (promajordescribeen.style.display !== "block" && othersdescribeen.style.display !== "block") {
            socialdescribeen.style.display = "none";
            promajordescribe.style.display = "none";
            socialdescribe.style.display = "block";
            othersdescribe.style.display = "none";
        } else {
            othersdescribeen.style.display = "none";
            promajordescribe.style.display = "none";
            socialdescribe.style.display = "none";
            othersdescribe.style.display = "block";
        }
    } else {
        c.style.display = "none";
        cen.style.display = "flex";
        if (socialdescribe.style.display !== "block" && othersdescribe.style.display !== "block") {
            promajordescribe.style.display = "none";
            promajordescribeen.style.display = "block";
            socialdescribeen.style.display = "none";
            othersdescribeen.style.display = "none";
        } else if (promajordescribe.style.display !== "block" && othersdescribe.style.display !== "block") {
            socialdescribe.style.display = "none";
            promajordescribeen.style.display = "none";
            socialdescribeen.style.display = "block";
            othersdescribeen.style.display = "none";
        } else {
            othersdescribe.style.display = "none";
            promajordescribeen.style.display = "none";
            socialdescribeen.style.display = "none";
            othersdescribeen.style.display = "block";
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var promajor = document.getElementById("pro-major");
    var social = document.getElementById("social");
    var others = document.getElementById("others");

    var promajoren = document.getElementById("pro-major-en");
    var socialen = document.getElementById("social-en");
    var othersen = document.getElementById("others-en");

    var promajordescribe = document.getElementById("pro-major-describe");
    var socialdescribe = document.getElementById("social-describe");
    var othersdescribe = document.getElementById("others-describe");

    var promajordescribeen = document.getElementById("pro-major-describe-en");
    var socialdescribeen = document.getElementById("social-describe-en");
    var othersdescribeen = document.getElementById("others-describe-en");
    
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

    promajoren.addEventListener('click', function() {
        promajordescribeen.style.display = "block";
        socialdescribeen.style.display = "none";
        othersdescribeen.style.display = "none";
    });
    socialen.addEventListener('click', function() {
        promajordescribeen.style.display = "none";
        socialdescribeen.style.display = "block";
        othersdescribeen.style.display = "none";
    });
    othersen.addEventListener('click', function() {
        promajordescribeen.style.display = "none";
        socialdescribeen.style.display = "none";
        othersdescribeen.style.display = "block";
    });
});