document.addEventListener('DOMContentLoaded', function() {
    var languageSwitcher = document.getElementById('languageSwitcher');
    
    languageSwitcher.addEventListener('click', function(event) {
        event.preventDefault();
        topbarLanguage();
        bottombarLanguage();
    });
});
