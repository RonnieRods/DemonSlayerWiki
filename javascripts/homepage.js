document.addEventListener('DOMContentLoaded', () => {
    //*
    // Connects a group of tab pills to their corresponding content panels.
    // Automatically highlights the first tab on load and toggles '.active'. 
    // */
    function setupTabGroup(tabs, defaultIndex = 0, onSwitch = null) {
        const validTabs = tabs.filter(t => document.querySelector(t.tab) && document.querySelector(t.panel));
        if (validTabs.length === 0) return;

        function activate(index) {
            validTabs.forEach((item, i) => {
                const tabEl = document.querySelector(item.tab);
                const panelEl = document.querySelector(item.panel);
                const isSelected = i === index;

                // Toggle '.active' on the <li> pill whether the selector is the <li> or an inner <a>
                const pillEl = tabEl.closest('li') || tabEl;
                pillEl.classList.toggle('active', isSelected);
                pillEl.setAttribute('aria-selected', String(isSelected));

                // Clear any legacy inline border styles from HTML
                pillEl.style.borderBottom = '';

                // Show or hide the target panel
                panelEl.style.display = isSelected ? (item.display || 'block') : 'none';
            });

            if (onSwitch) onSwitch(index);
        }

        validTabs.forEach((item, index) => {
            const tabEl = document.querySelector(item.tab);
            tabEl.addEventListener('click', (e) => {
                e.preventDefault();
                activate(index);
            });
        });

        // Set initial active state on page load
        activate(defaultIndex);
    }

    // 1. Characters Widget (Anime / Manga)
    setupTabGroup([
        { tab: '#op1', panel: '#anime-characters', display: 'grid' },
        { tab: '#op2', panel: '#manga-content', display: 'grid' }
    ]);

    // 2. Upcoming Releases Widget (Anime / Manga / Games)
    setupTabGroup([
        { tab: '#release1', panel: '#anime-release' },
        { tab: '#release2', panel: '#manga-release' },
        { tab: '#release3', panel: '#games-release' }
    ]);

    // 3. Latest Release Sub-Tabs
    const switchChapterVolume = setupTabGroup([
        { tab: '#chapter-release', panel: '#chapter_section' },
        { tab: '#volume-release', panel: '#volume_tabs' }
    ], 0, (index) => {
        // Hide volume sub-sections when switching back to Chapter; reset to Japanese when clicking Volume
        if (index === 0) {
            document.querySelector('#japanese_volume_section').style.display = 'none';
            document.querySelector('#english_volume_section').style.display = 'none';
        }
        else {
            switchVolumeLang(0);
        }
    });

    // 4. Volume Language Sub-Tabs (Japanese / English)
    const switchVolumeLang = setupTabGroup([
        { tab: '#japanese-release', panel: '#japanese_volume_section' },
        { tab: '#english-release', panel: '#english_volume_section' }
    ]);

    // 5. Anime Episode Sub-Tabs (Subbed / Dubbed)
    const switchSubDub = setupTabGroup([
        { tab: '#subbed', panel: '#subbed_section' },
        { tab: '#dubbed', panel: '#dubbed_section' }
    ]);

    // 6. Anime Release Type Sub-Tabs (Episode / Home Release)
    const switchEpisodeHome = setupTabGroup([
        { tab: '#latest_episode', panel: '#episode_content' },
        { tab: '#latest_home_release', panel: '#home_release_section' }
    ]);

    // 7. Latest Release Top-Level Tabs (Manga / Anime)
    setupTabGroup([
        { tab: '#latest-release1', panel: '#chapter_tabs' },
        { tab: '#latest-release2', panel: '#anime_section' }
    ], 0, (index) => {
        if (index === 0) {
            // Reset Manga view to Chapter
            document.querySelector('#chapter_section').style.display = 'block';
            document.querySelector('#volume_tabs').style.display = 'none';
            document.querySelector('#japanese_volume_section').style.display = 'none';
            document.querySelector('#english_volume_section').style.display = 'none';
            const chapterPill = document.querySelector('#chapter-release');
            const volumePill = document.querySelector('#volume-release');
            if (chapterPill) chapterPill.classList.add('active');
            if (volumePill) volumePill.classList.remove('active');
        } else {
            // Reset Anime view to Episode -> Subbed
            document.querySelector('#chapter_section').style.display = 'none';
            document.querySelector('#volume_tabs').style.display = 'none';
            document.querySelector('#japanese_volume_section').style.display = 'none';
            document.querySelector('#english_volume_section').style.display = 'none';
            document.querySelector('#episode_content').style.display = 'block';
            document.querySelector('#home_release_section').style.display = 'none';
            document.querySelector('#subbed_section').style.display = 'block';
            document.querySelector('#dubbed_section').style.display = 'none';
        }
    });
});