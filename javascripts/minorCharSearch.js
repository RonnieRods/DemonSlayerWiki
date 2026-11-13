const minorSearchInput = document.getElementById('minorCharSearch');

if (minorSearchInput) {
    const tables = Array.from(document.querySelectorAll('.minor-char-table'));
    const countDisplay = document.getElementById('minorCharCount');
    const noResultsMsg = document.getElementById('minorNoResults');
    const clearBtn = document.getElementById('minorClearBtn');
    const categoryPills = document.querySelectorAll('.minor-pill');

    let activeCategory = 'all';

    // Find the main description cell for each of the 54 characters
    const descCells = document.querySelectorAll('.minor-char-desc-container');
    const totalCharacters = descCells.length;

    // Build a clean list of character entries (each entry = its main <tr> + any companion <tr>s)
    const characterEntries = Array.from(descCells).map((descCell) => {
        const mainRow = descCell.closest('tr');
        const topicCell = mainRow.querySelector('.minor-char-topic-container');
        const span = topicCell ? parseInt(topicCell.getAttribute('rowspan') || '1', 10) : 1;

        const rows = [mainRow];
        let nextRow = mainRow.nextElementSibling;

        // If the character uses rowspan across multple <tr> tags, include those rows too
        for (let i = 1; i < span && nextRow; i++) {
            rows.push(nextRow);
            nextRow = nextRow.nextElementSibling;
        }

        // Combine text from all rows belonging to this single character
        const parentTable = mainRow.closest('.minor-char-table');
        const tableIndex = String(tables.indexOf(parentTable));
        const combinedText = rows.map(r => r.textContent.toLowerCase()).join(' ');

        return { rows, combinedText, table: parentTable, tableIndex };
    });

    function applyFilters() {
        const query = minorSearchInput.value.toLowerCase().trim();
        let visibleCount = 0;

        // Show or hide the Clear button
        if (clearBtn) {
            clearBtn.style.display = query.length > 0 ? 'inline-block' : 'none';
        }

        // Filter each character by both search query and selected category pill
        characterEntries.forEach((entry) => {
            const matchesText = entry.combinedText.includes(query);
            const matchesCategory = activeCategory === 'all' || entry.tableIndex === activeCategory;
            const isVisible = matchesText && matchesCategory;

            entry.rows.forEach((row) => {
                row.style.display = isVisible ? '' : 'none';
            });

            if (isVisible) visibleCount++;
        });

        // Hide section tables (and their preceding H2/H3 section headings) if empty
        tables.forEach((table) => {
            const hasVisibleEntry = characterEntries.some(
                (entry) => entry.table === table && entry.rows[0].style.display !== 'none'
            );
            table.style.display = hasVisibleEntry ? '' : 'none';

            // Hide the section heading right above the table when that section is filtered out
            const prevHeading = table.previousElementSibling;
            if (prevHeading && /^H[2-4]$/.test(prevHeading.tagName)) {
                prevHeading.style.display = hasVisibleEntry ? '' : 'none';
            }
        });

        // Update live counter & empty-state message
        if (countDisplay) {
            if (query === '' && activeCategory === 'all') {
                countDisplay.textContent = `Showing all ${totalCharacters} characters`;
            } else {
                countDisplay.textContent = `Showing ${visibleCount} of ${totalCharacters}`;
            }
        }

        if (noResultsMsg) {
            noResultsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
        }
    }

    // Listen to search typing
    minorSearchInput.addEventListener('input', applyFilters);

    // Clear button click
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            minorSearchInput.value = '';
            applyFilters();
            minorSearchInput.focus();
        });
    }

    // Category pill clicks
    categoryPills.forEach((pill) => {
        pill.addEventListener('click', () => {
            categoryPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            activeCategory = pill.getAttribute('data-category');
            applyFilters();
        });
    });

    // Auto-resets filters if a user clicks a Table of Contents link while filtered
    document.querySelectorAll('.minor-char-guide a').forEach((link) => {
        link.addEventListener('click', () => {
            if (activeCategory !== 'all' || minorSearchInput.value !== '') {
                minorSearchInput.value = '';
                activeCategory = 'all';
                categoryPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-category') === 'all'));
                applyFilters();
            }
        })
    })

    // Initialize state on load
    applyFilters();
}
