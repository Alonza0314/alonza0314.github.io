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

