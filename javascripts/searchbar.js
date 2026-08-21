const projects = [
    {
        title: "Homepage",
        description: "Home",
        url: "/../DemonSlayerWiki/index.html"
    },
    {
        title: "Characters",
        description: "All Characters",
        url: "/../DemonSlayerWiki/characters.html"
    },
    {
        title: "Minor Characters",
        description: "Minor",
        url: "/../DemonSlayerWiki/Characters/Minor.html"
    },
    {
        title: "Akito Ubuyashiki",
        description: "Akito",
        url: "/../DemonSlayerWiki/Characters/Akito_Ubuyashiki/info.html"
    },
    {
        title: "Kagaya Ubuyashiki",
        description: "Kagaya",
        url: "/../DemonSlayerWiki/Characters/Kagaya_Ubuyashiki/info.html"
    },
    {
        title: "Amane Ubuyashiki",
        description: "Amane",
        url: "/../DemonSlayerWiki/Characters/Amane_Ubuyashiki/info.html"
    },
    {
        title: "Giyu Tomioka",
        description: "Giyu",
        url: "/../DemonSlayerWiki/Characters/Giyu_Tomioka/info.html"
    },
    {
        title: "Gyomei Himejima",
        description: "Gyomei",
        url: "/../DemonSlayerWiki/Characters/Gyomei_Himejima/info.html"
    },
    {
        title: "Hinaki Ubuyashiki",
        description: "Hinaki",
        url: "/../DemonSlayerWiki/Characters/Amane_Ubuyashiki/info.html"
    },
    {
        title: "Kanata Ubuyashiki",
        description: "Kanata",
        url: "/../DemonSlayerWiki/Characters/Kanata_Ubuyashiki/info.html"
    },
    {
        title: "Kiriya Ubuyashiki",
        description: "Kiriya",
        url: "/../DemonSlayerWiki/Characters/Kiriya_Ubuyashiki/info.html"
    },
    {
        title: "Kuina Ubuyashiki",
        description: "Kuina",
        url: "/../DemonSlayerWiki/Characters/Kuina_Ubuyashiki/info.html"
    },
    {
        title: "Mitsuri Kanroji",
        description: "Mitsuri",
        url: "/../DemonSlayerWiki/Characters/Mitsuri_Kanroji/info.html"
    },
    {
        title: "Nichika Ubuyashiki",
        description: "Nichika",
        url: "/../DemonSlayerWiki/Characters/Nichika_Ubuyashiki/info.html"
    },
    {
        title: "Obanai Iguro",
        description: "Obanai",
        url: "/../DemonSlayerWiki/Characters/Obanai_Iguro/info.html"
    },
    {
        title: "Sanemi Shinazugawa",
        description: "Sanemi",
        url: "/../DemonSlayerWiki/Characters/Sanemi_Shinazugawa/info.html"
    },
    {
        title: "Senri Ubuyashiki",
        description: "Senri",
        url: "/../DemonSlayerWiki/Characters/Senri_Ubuyashiki/info.html"
    },
    {
        title: "Muichiro Tokito",
        description: "Muichiro",
        url: "/../DemonSlayerWiki/Characters/Muichiro_Tokito/info.html"
    },
    {
        title: "Shinobu Kocho",
        description: "Shinobu",
        url: "/../DemonSlayerWiki/Characters/Shinobu_Kocho/info.html"
    },
    {
        title: "Kyojuro Rengoku",
        description: "Kyojuro",
        url: "/../DemonSlayerWiki/Characters/Kyojuro_Rengoku/info.html"
    },
    {
        title: "Kanae Kocho",
        description: "Kanae",
        url: "/../DemonSlayerWiki/Characters/Kanae_Kocho/info.html"
    },
    {
        title: "Tengen Uzui",
        description: "Tengen",
        url: "/../DemonSlayerWiki/Characters/Tengen_Uzui/info.html"
    },
    {
        title: "Sakonji Urokodaki",
        description: "Sakonji",
        url: "/../DemonSlayerWiki/Characters/Sakonji_Urokodaki/info.html"
    },
];

const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const searchButton = document.querySelector('#search-button');

searchInput.addEventListener('keyup', (event) => {
    const query = event.target.value.toLowerCase();
    searchResults.innerHTML = '';

    if (query.length === 0) {
        searchResults.style.display = 'none';
    } else {
        searchResults.style.display = 'block';
    };

    const filteredProjects = projects.filter(project => {
        return project.title.toLowerCase().includes(query) || project.description.toLowerCase().includes(query);
    });

    displayResults(filteredProjects);
});

function displayResults(results) {
    if (results.length === 0) {
        searchResults.innerHTML = '<p>No results found.</p>';
        return;
    }

    const list = document.createElement('ul');
    results.forEach(project => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = project.url;
        link.className = 'link';
        link.textContent = project.title;
        listItem.appendChild(link);
        list.appendChild(listItem);
        searchButton.addEventListener('click', (e) => {
            if (e.key = 'Enter') {
                e.preventDefault();

                window.location.href = project.url;
            }
        })
    });
    searchResults.appendChild(list);
};