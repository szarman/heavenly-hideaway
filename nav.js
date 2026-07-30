// Make the nav dropdown work on touch screens: tap to open, tap elsewhere to close.
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('nav .dropbtn').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            btn.parentElement.classList.toggle('open');
            e.stopPropagation();
        });
    });
    document.addEventListener('click', function () {
        document.querySelectorAll('nav .dropdown.open').forEach(function (d) {
            d.classList.remove('open');
        });
    });
});
