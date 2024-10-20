// common.js

document.addEventListener("DOMContentLoaded", function () {
    // Menu functionality
    const menuToggle = document.querySelector('button.lg\\:hidden');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');
    const body = document.body;

    if (menuToggle && mobileMenu && closeMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            body.classList.toggle('overflow-hidden');
        });

        closeMenu.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            body.classList.remove('overflow-hidden');
        });
    }
});
