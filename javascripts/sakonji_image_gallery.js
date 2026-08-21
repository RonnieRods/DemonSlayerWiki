// Manga Section Tabs
const ProfileContainer = document.querySelector('#Profile-Contain');
const ProfileBtn = document.querySelector('#Profile');
const ProfileContent = document.querySelector('#Profile-Content');

const PlotContainer = document.querySelector('#Plot-Contain');
const PlotBtn = document.querySelector('#Plot');
const PlotContent = document.querySelector('#Plot-Content');

const SpinoffContainer = document.querySelector('#Spin-Contain');
const SpinoffBtn = document.querySelector('#Spinoff');
const SpinoffContent = document.querySelector('#Spinoff-Content');

const CoverContainer = document.querySelector('#Cover-Contain');
const CoverBtn = document.querySelector('#Covers');
const CoverContent = document.querySelector('#Cover-Content');

// Anime Section Tabs
const AnimeProContainer = document.querySelector('#Anime-Profile-Contain');
const AnimeProBtn = document.querySelector('#Anime-Profile');
const AnimeProContent = document.querySelector('#Anime-Profile-Content');

const AnimePlotContainer = document.querySelector('#Anime-Plot-Contain');
const AnimePlotBtn = document.querySelector('#Anime-Plot');
const AnimePlotContent = document.querySelector('#Anime-Plot-Content');

const EyeCatchContainer = document.querySelector('#Eyecatcher-Contain');
const EyeCatchBtn = document.querySelector('#Eyecatchers');
const EyeCatchContent = document.querySelector('#Eyecatcher-Content');

const AnimeCoverContainer = document.querySelector('#Anime-Covers-Contain');
const AnimeCoverBtn = document.querySelector('#Anime-Covers');
const AnimeCoverContent = document.querySelector('#Anime-Covers-Content');


// Switching tabs logic for anime section
ProfileBtn.addEventListener('click', (e) => {
    e.preventDefault();
    ProfileContent.style.display = 'block';
    ProfileContainer.style.borderBottom = '2px solid gold';

    PlotContent.style.display = 'none';
    PlotContainer.style.borderBottom = '0px';

    SpinoffContent.style.display = 'none';
    SpinoffContainer.style.borderBottom = '0px';

    CoverContent.style.display = 'none';
    CoverContainer.style.borderBottom = '0px';
});

PlotBtn.addEventListener('click', (e) => {
    e.preventDefault();
    ProfileContent.style.display = 'none';
    ProfileContainer.style.borderBottom = '0px';

    PlotContent.style.display = 'block';
    PlotContainer.style.borderBottom = '2px solid gold';
    
    SpinoffContent.style.display = 'none';
    SpinoffContainer.style.borderBottom = '0px';
    
    CoverContent.style.display = 'none';
    CoverContainer.style.borderBottom = '0px';
});

SpinoffBtn.addEventListener('click', (e) => {
    e.preventDefault();
    ProfileContent.style.display = 'none';
    ProfileContainer.style.borderBottom = '0px';

    PlotContent.style.display = 'none';
    PlotContainer.style.borderBottom = '0px';
    
    SpinoffContent.style.display = 'block';
    SpinoffContainer.style.borderBottom = '2px solid gold';

    CoverContent.style.display = 'none';
    CoverContainer.style.borderBottom = '0px';
});

CoverBtn.addEventListener('click', (e) => {
    e.preventDefault();
    ProfileContent.style.display = 'none';
    ProfileContainer.style.borderBottom = '0px';

    PlotContent.style.display = 'none';
    PlotContainer.style.borderBottom = '0px';
    
    SpinoffContent.style.display = 'none';
    SpinoffContainer.style.borderBottom = '0px';

    CoverContent.style.display = 'block';
    CoverContainer.style.borderBottom = '2px solid gold';
});

// Switching tabs logic for anime section
AnimeProBtn.addEventListener('click', (e) => {
    e.preventDefault();

    AnimeProContent.style.display = 'block';
    AnimeProContainer.style.borderBottom = '2px solid gold';

    AnimePlotContent.style.display = 'none';
    AnimePlotContainer.style.borderBottom = '0px';

    EyeCatchContent.style.display = 'none';
    EyeCatchContainer.style.borderBottom = '0px';

    AnimeCoverContent.style.display = 'none';
    AnimeCoverContainer.style.borderBottom = '0px';
});

AnimePlotBtn.addEventListener('click', (e) => {
    e.preventDefault();

    AnimeProContent.style.display = 'none';
    AnimeProContainer.style.borderBottom = '0px';

    AnimePlotContent.style.display = 'block';
    AnimePlotContainer.style.borderBottom = '2px solid gold';

    EyeCatchContent.style.display = 'none';
    EyeCatchContainer.style.borderBottom = '0px';

    AnimeCoverContent.style.display = 'none';
    AnimeCoverContainer.style.borderBottom = '0px';
});

EyeCatchBtn.addEventListener('click', (e) => {
    e.preventDefault();

    AnimeProContent.style.display = 'none';
    AnimeProContainer.style.borderBottom = '0px';

    AnimePlotContent.style.display = 'none';
    AnimePlotContainer.style.borderBottom = '0px';

    EyeCatchContent.style.display = 'block';
    EyeCatchContainer.style.borderBottom = '2px solid gold';

    AnimeCoverContent.style.display = 'none';
    AnimeCoverContainer.style.borderBottom = '0px';
});

AnimeCoverBtn.addEventListener('click', (e) => {
    e.preventDefault();

    AnimeProContent.style.display = 'none';
    AnimeProContainer.style.borderBottom = '0px';

    AnimePlotContent.style.display = 'none';
    AnimePlotContainer.style.borderBottom = '0px';

    EyeCatchContent.style.display = 'none';
    EyeCatchContainer.style.borderBottom = '0px';

    AnimeCoverContent.style.display = 'block';
    AnimeCoverContainer.style.borderBottom = '2px solid gold';
});