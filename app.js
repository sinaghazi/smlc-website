document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const body = document.body;

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('-translate-x-full');
        menuOverlay.classList.toggle('hidden');
        body.classList.toggle('overflow-hidden');
    });

    menuOverlay.addEventListener('click', function() {
        mobileMenu.classList.add('-translate-x-full');
        menuOverlay.classList.add('hidden');
        body.classList.remove('overflow-hidden');
    });
});
