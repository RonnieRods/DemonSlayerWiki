document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    // 1. Handle Main Hamburger Menu Expand
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            const isActive = navMenu.classList.toggle('is-active');
            navToggle.setAttribute('aria-expanded', isActive);
        });
    }

    // 2. Safely Trap Mobile Submenu Tree Clicks
    const structuralTriggers = document.querySelectorAll('.dropdown-trigger, .sub-trigger');

    structuralTriggers.forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            // Run click handling rules strictly on mobile devices (<= 768px wide)
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();

                // Fetch direct link element context parent node block execution area
                const parentNode = this.parentElement;
                parentNode.classList.toggle('is-open');
            }
        });
    });

    // 3. Clear open vectors if clicking outside the active menu track
    document.addEventListener('click', function () {
        if (window.innerWidth <= 768) {
            //
        }
    })
})