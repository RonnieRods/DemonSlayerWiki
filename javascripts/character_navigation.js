document.querySelectorAll('.guideHeader').forEach((header) => {
    const body = header.nextElementSibling;
    // Prioritize an <a> or <button> first so we don't accidentally grab an outer wrapper <span>
    const toggleBtn = header.querySelector('a, button') || header.querySelector('span');

    if (!body || !body.classList.contains('guideBody') || !toggleBtn) return;

    // Remove inline onclick if present so the animation handles the toggle cleanly
    toggleBtn.removeAttribute('onclick');
    let isAnimating = false;

    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (isAnimating) return;

        const isHidden = body.style.display === 'none' || window.getComputedStyle(body).display === 'none';
        isAnimating = true;

        if (isHidden) {
            // EXPAND
            body.style.display = 'grid';
            const targetHeight = `${body.scrollHeight}px`;
            body.style.height = '0px';
            body.style.opacity = '0';
            header.classList.remove('is-collapsed');

            const anim = body.animate(
                [
                    { height: '0px', opacity: 0, paddingTop: '0px', paddingBottom: '0px' },
                    { height: targetHeight, opacity: 1, paddingTop: '10px', paddingBottom: '10px' }
                ],
                { duration: 250, easing: 'ease-out' }
            );

            anim.onfinish = () => {
                body.style.height = '';
                body.style.opacity = '';
                toggleBtn.textContent = toggleBtn.textContent.replace(/show/i, 'hide');
                isAnimating = false;
            };
        } else {
            // COLLAPSE
            const startHeight = `${body.offsetHeight}px`;

            const anim = body.animate(
                [
                    { height: startHeight, opacity: 1, paddingTop: '10px', paddingBottom: '10px' },
                    { height: '0px', opacity: 0, paddingTop: '0px', paddingBottom: '0px' }
                ],
                { duration: 250, easing: 'ease-out' }
            );

            anim.onfinish = () => {
                body.style.display = 'none';
                body.style.height = '';
                body.style.opacity = '';
                header.classList.add('is-collapsed');
                toggleBtn.textContent = toggleBtn.textContent.replace(/hide/i, 'show');
                isAnimating = false;
            };
        }
    });
});

// Smooth Toggle for Bottom Character Navigation Table (.nav-table-container)
document.querySelectorAll('.nav-table-container').forEach((navTable) => {
    const header = navTable.querySelector('.nav-table-header');
    const toggleBtn = header ? header.querySelector('aside a, aside button, aside span') : null;

    if (!header || !toggleBtn) return;

    // Collect all rows in the table except the header row itself
    const headerRow = header.closest('tr');
    const contentRows = Array.from(navTable.querySelectorAll('tr')).filter(row => row !== headerRow);

    if (contentRows.length === 0) return;

    // Remove inline onclick handler so the animation controls the state cleanly
    toggleBtn.removeAttribute('onclick');
    let isAnimating = false;

    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (isAnimating) return;

        const firstRow = contentRows[0];
        const isHidden = firstRow.style.display === 'none' || window.getComputedStyle(firstRow).display === 'none';
        isAnimating = true;

        if (isHidden) {
            // EXPAND
            contentRows.forEach((row) => {
                row.style.display = 'table-row';
            });

            const animations = contentRows.map((row) =>
                row.animate(
                    [
                        { opacity: 0, transform: 'translateY(-6px)' },
                        { opacity: 1, transform: 'translateY(0)' }
                    ],
                    { duration: 220, easing: 'ease-out' }
                )
            );

            animations[0].onfinish = () => {
                toggleBtn.textContent = toggleBtn.textContent.replace(/show/i, 'hide');
                isAnimating = false;
            };
        } else {
            // COLLAPSE
            const animations = contentRows.map((row) =>
                row.animate(
                    [
                        { opacity: 1, transform: 'translateY(0)' },
                        { opacity: 0, transform: 'translateY(-6px)' }
                    ],
                    { duration: 200, easing: 'ease-in' }
                )
            );

            animations[0].onfinish = () => {
                contentRows.forEach((row) => {
                    row.style.display = 'none';
                });
                toggleBtn.textContent = toggleBtn.textContent.replace(/hide/i, 'show');
                isAnimating = false;
            };
        }
    });
});

// Auto-Highlight Current Character Link in Bottom Navigation Table (GitHub Pages Safe)
function normalizeWikiPath(rawPath) {
    return decodeURIComponent(rawPath)
        .toLowerCase()
        .replace(/\/index\.html$/, '')
        .replace(/\.html$/, '')
        .replace(/\/$/, '');
}

const normalizedCurrent = normalizeWikiPath(window.location.pathname);

document.querySelectorAll('.nav-table-section-right a').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;

    const linkPath = normalizeWikiPath(new URL(href, window.location.href).pathname);

    if (
        normalizedCurrent === linkPath ||
        normalizedCurrent.startsWith(`${linkPath}/`)
    ) {
        link.classList.add('nav-table-current');
        link.setAttribute('aria-current', 'page');
    }
});

// Character Sub-Page Tabs (Info | Synopsis | Relationships | Image Gallery)
document.querySelectorAll('.link-tabs .link-space a').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;

    const linkPath = normalizeWikiPath(new URL(href, window.location.href).pathname);

    if (normalizedCurrent === linkPath) {
        link.closest('.link-space').classList.add('current-page');
        link.setAttribute('aria-current', 'page');
    }
});

// Image Gallery Sub-Tabs (Anime | Manga | Misc, if used across separate pages)
document.querySelectorAll('.image-gallery-subheader a.image-gallery-tabs').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;

    const linkPath = normalizeWikiPath(new URL(href, window.location.href).pathname);

    if (normalizedCurrent === linkPath) {
        link.classList.add('current-gallery-tab');
        link.setAttribute('aria-current', 'page');
    }
});

// Top Navbar Links & Parent Dropdown Triggers
const homeLink = document.querySelector('.navbar .nav-menu > a.nav-item[href]');
const homePath = homeLink
    ? normalizeWikiPath(new URL(homeLink.getAttribute('href'), window.location.href).pathname)
    : '';

document.querySelectorAll('.navbar a[href]').forEach((link) => {
    if (link.classList.contains('logo-link')) return;

    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;

    const linkPath = normalizeWikiPath(new URL(href, window.location.href).pathname);

    // Home link must match the homepage exactly; other links can match sub-pages
    const isHomeLink = linkPath === homePath;
    const isMatch = isHomeLink
        ? normalizedCurrent === linkPath
        : normalizedCurrent === linkPath || normalizedCurrent.startsWith(`${linkPath}/`);

    if (isMatch) {
        link.classList.add('active-nav-link');
        link.setAttribute('aria-current', 'page');

        const parentDropdown = link.closest('.dropdown, .world-dropdown');
        if (parentDropdown) {
            const topTrigger = parentDropdown.querySelector('.dropdown-trigger, .nav-item');
            if (topTrigger) {
                topTrigger.classList.add('active-nav-link');
            }
        }
    }
});