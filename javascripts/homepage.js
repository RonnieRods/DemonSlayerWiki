// Character list variables
const animeBtn = document.querySelector('#anime-char-tab');
const mangaBtn = document.querySelector('#manga-char-tab');
const animeContent = document.querySelector('#anime-characters');
const mangaContent = document.querySelector('#manga-content');
const op1 = document.querySelector('#op1');
const op2 = document.querySelector('#op2');

// Media content variables
const animeReleaseBox = document.querySelector('#release1');
const mangaReleaseBox = document.querySelector('#release2');
const gamesReleaseBox = document.querySelector('#release3');
const animeReleaseBtn = document.querySelector('#anime-release-tab');
const mangaReleaseBtn = document.querySelector('#manga-release-tab');
const gamesReleaseBtn = document.querySelector('#games-release-tab');
const animeReleaseContent = document.querySelector('#anime-release');
const mangaReleaseContent = document.querySelector('#manga-release');
const gamesReleaseContent = document.querySelector('#games-release');

// Manga and Anime buttons for the beginning of Latest Release Section
const mangaContainer = document.querySelector('#latest-release1');
const mangaTabBtn = document.querySelector('#latest-manga-release');
const animeContainer = document.querySelector('#latest-release2');
const animeTabBtn = document.querySelector('#latest-anime-release');
const animeTabContent = document.querySelector('#anime_section');

// Episode Tab & Section
const episodeContainer = document.querySelector('#latest_episode');
const episodeBtn = document.querySelector('#episode_button');
const episodeContent = document.querySelector('#episode_content');

// Home Release Tab & Section
const homeReleaseContainer = document.querySelector('#latest_home_release');
const homeReleaseBtn = document.querySelector('#home_release_button');
const homeReleaseContent = document.querySelector('#home_release_section');

// Manga Tab
const chapterReleaseContainer = document.querySelector('#chapter-release');
const chapterReleaseBtn = document.querySelector('#chapter-release-tab');
const chapterSection = document.querySelector('#chapter_section');

const volumeReleaseContainer = document.querySelector('#volume-release');
const volumeReleaseBtn = document.querySelector('#volume-release-tab');
const volumeTabs = document.querySelector('#volume_tabs');
const chapterTabs = document.querySelector('#chapter_tabs');

const japaneseReleaseContainer = document.querySelector('#japanese-release');
const japaneseReleaseBtn = document.querySelector('#japanese-release-tab');
const japaneseVolumeSection = document.querySelector('#japanese_volume_section');
const englishReleaseContainer = document.querySelector('#english-release');
const englishReleaseBtn = document.querySelector('#english-release-tab');
const englishVolumeSection = document.querySelector('#english_volume_section');

// Subbed Tab & Section
const subContainer = document.querySelector('#subbed');
const subbedBtn = document.querySelector('#subbed_button');
const subbedContent = document.querySelector('#subbed_section');

// Dubbed Tab & Section
const dubContainer = document.querySelector('#dubbed');
const dubbedBtn = document.querySelector('#dubbed_button');
const dubbedContent = document.querySelector('#dubbed_section');

// Switching between anime and manga profiles
animeBtn.addEventListener('click', () => {
    op1.style.borderBottom = '2px solid gold';
    op2.style.borderBottom = '0px solid gold';
    animeContent.style.display = 'grid';
    mangaContent.style.display = 'none';
});


mangaBtn.onclick = function(e) {
    op1.style.borderBottom = '0px solid gold';
    op2.style.borderBottom = '2px solid gold';
    animeContent.style.display = 'none';
    mangaContent.style.display = 'grid';
};

mangaTabBtn.addEventListener('click', () => {
    mangaContainer.style.borderBottom = '2px solid gold';
    animeContainer.style.borderBottom = '0px';
    chapterTabs.style.display = 'block';
    chapterSection.style.display = 'block';
    animeTabContent.style.display = 'none';
    chapterReleaseContainer.style.borderBottom = '2px solid gold';
    volumeReleaseContainer.style.borderBottom = '0px';
    volumeTabs.style.display = 'none';
    japaneseVolumeSection.style.display = 'none';
    englishVolumeSection.style.display = 'none';
});

animeTabBtn.addEventListener('click', () => {
    animeContainer.style.borderBottom = '2px solid gold';
    mangaContainer.style.borderBottom = '-0px';
    animeTabContent.style.display = 'block';
    chapterTabs.style.display = 'none';
    chapterSection.style.display = 'none';
    episodeContainer.style.borderBottom = '2px solid gold';
    homeReleaseContainer.style.borderBottom = '0px';
    subContainer.style.borderBottom = '2px solid gold';
    dubContainer.style.borderBottom = '0px';
    episodeContent.style.display = 'block';
    homeReleaseContent.style.display = 'none';
    subContainer.style.borderBottom = '2px solid gold';
    dubContainer.style.borderBottom = '2px';
    subbedContent.style.display = 'block';
    dubbedContent.style.display = 'none';
    volumeTabs.style.display = 'none';
    japaneseVolumeSection.style.display = 'none';
    englishVolumeSection.style.display = 'none';
})

// Switching between different media content
animeReleaseBtn.addEventListener('click', () => {
    animeReleaseBox.style.borderBottom = '2px solid gold';
    mangaReleaseBox.style.borderBottom = '0px';
    gamesReleaseBox.style.borderBottom = '0px';
    
    animeReleaseContent.style.display = 'block';
    mangaReleaseContent.style.display = 'none';
    gamesReleaseContent.style.display = 'none';
});

mangaReleaseBtn.addEventListener('click', () => {
    animeReleaseBox.style.borderBottom = '0px';
    mangaReleaseBox.style.borderBottom = '2px solid gold';
    gamesReleaseBox.style.borderBottom = '0px';
    
    animeReleaseContent.style.display = 'none';
    mangaReleaseContent.style.display = 'block';
    gamesReleaseContent.style.display = 'none';
});

gamesReleaseBox.addEventListener('click', () => {
    animeReleaseBox.style.borderBottom = '0px';
    mangaReleaseBox.style.borderBottom = '0px';
    gamesReleaseBox.style.borderBottom = '2px solid gold';
    
    animeReleaseContent.style.display = 'none';
    mangaReleaseContent.style.display = 'none';
    gamesReleaseContent.style.display = 'block';
});

chapterReleaseBtn.addEventListener('click', () => {
    chapterReleaseContainer.style.borderBottom = '2px solid gold';
    volumeReleaseContainer.style.borderBottom = '0px';
    chapterSection.style.display = 'block';
    volumeTabs.style.display = 'none';
    japaneseVolumeSection.style.display = 'none';
    englishVolumeSection.style.display = 'none';
});

volumeReleaseBtn.addEventListener('click', () => {
    volumeReleaseContainer.style.borderBottom = '2px solid gold';
    chapterReleaseContainer.style.borderBottom = '0px';
    chapterSection.style.display = 'none';
    volumeTabs.style.display = 'block';
    japaneseReleaseContainer.style.borderBottom = '2px solid gold';
    englishReleaseContainer.style.borderBottom = '0px';
    japaneseVolumeSection.style.display = 'block';
    englishVolumeSection.style.display = 'none';
});

japaneseReleaseBtn.addEventListener('click', () => {
    japaneseReleaseContainer.style.borderBottom = '2px solid gold';
    englishReleaseContainer.style.borderBottom = '0px';
    japaneseVolumeSection.style.display = 'block';
    englishVolumeSection.style.display = 'none';
});

englishReleaseBtn.addEventListener('click', () => {
    englishReleaseContainer.style.borderBottom = '2px solid gold';
    japaneseReleaseContainer.style.borderBottom = '0px';
    japaneseVolumeSection.style.display = 'none';
    englishVolumeSection.style.display = 'block';
});

subbedBtn.addEventListener('click', () => {
    subContainer.style.borderBottom = '2px solid gold';
    dubContainer.style.borderBottom = '0px';
    subbedContent.style.display = 'block';
    dubbedContent.style.display = 'none';
});

dubbedBtn.addEventListener('click', () => {
    dubContainer.style.borderBottom = '2px solid gold';
    subContainer.style.borderBottom = '0px';
    dubbedContent.style.display = 'block';
    subbedContent.style.display = 'none';
});

episodeBtn.addEventListener('click', () => {
    episodeContainer.style.borderBottom = '2px solid gold';
    homeReleaseContainer.style.borderBottom = '0px';
    episodeContent.style.display = 'block';
    homeReleaseContent.style.display = 'none'
});

homeReleaseBtn.addEventListener('click', () => {
    homeReleaseContainer.style.borderBottom = '2px solid gold';
    episodeContainer.style.borderBottom = '0px';
    homeReleaseContent.style.display = 'block';
    episodeContent.style.display = 'none';
});