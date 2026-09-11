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

// Games Section Tabs
const RenderContainer = document.querySelector('#Renders-Container');
const RenderBtn = document.querySelector('#Renders');
const RenderContent = document.querySelector('#Render-Content');

const VisualContainer = document.querySelector('#Visuals-Container');
const VisualBtn = document.querySelector('#Visuals');
const VisualContent = document.querySelector('#Visual-Content');

const HCContainer = document.querySelector('#HC-Container');
const HCBtn = document.querySelector('#HC');
const HCContent = document.querySelector('#HC-Content');

const HC2Container = document.querySelector('#HC2-Container');
const HC2Btn = document.querySelector('#HC2');
const HC2Content = document.querySelector('#HC2-Content');

const JumputiHeroesContainer = document.querySelector('#JumputiHeroes-Container');
const JHBtn = document.querySelector('#JumputiHeroes');
const JHContent = document.querySelector('#JH-Content');

const NBSContainer = document.querySelector('#NBS-Container');
const NBSBtn = document.querySelector('#NBS');
const NBSContent = document.querySelector('#NBS-Content');

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

// Switching tabs logic for games section
RenderBtn.addEventListener('click', (e) => {
    e.preventDefault();

    RenderContent.style.display = 'block';
    RenderContainer.style.borderBottom = '2px solid gold';

    VisualContent.style.display = 'none';
    VisualContainer.style.borderBottom = '0px';

    HCContent.style.display = 'none';
    HCContainer.style.borderBottom = '0px';

    HC2Content.style.display = 'none';
    HC2Container.style.borderBottom = '0px';

    JHContent.style.display = 'none';
    JumputiHeroesContainer.style.borderBottom = '0px';

    NBSContent.style.display = 'none';
    NBSContainer.style.borderBottom = '0px';
});

VisualBtn.addEventListener('click', (e) => {
    e.preventDefault();

    RenderContent.style.display = 'none';
    RenderContainer.style.borderBottom = '0px';

    VisualContent.style.display = 'block';
    VisualContainer.style.borderBottom = '2px solid gold';

    HCContent.style.display = 'none';
    HCContainer.style.borderBottom = '0px';

    HC2Content.style.display = 'none';
    HC2Container.style.borderBottom = '0px';

    JHContent.style.display = 'none';
    JumputiHeroesContainer.style.borderBottom = '0px';

    NBSContent.style.display = 'none';
    NBSContainer.style.borderBottom = '0px';
});

HCBtn.addEventListener('click', (e) => {
    e.preventDefault();

    RenderContent.style.display = 'none';
    RenderContainer.style.borderBottom = '0px';

    VisualContent.style.display = 'none';
    VisualContainer.style.borderBottom = '0px';

    HCContent.style.display = 'block';
    HCContainer.style.borderBottom = '2px solid gold';

    HC2Content.style.display = 'none';
    HC2Container.style.borderBottom = '0px';

    JHContent.style.display = 'none';
    JumputiHeroesContainer.style.borderBottom = '0px';

    NBSContent.style.display = 'none';
    NBSContainer.style.borderBottom = '0px';
});

HC2Btn.addEventListener('click', (e) => {
    e.preventDefault();

    RenderContent.style.display = 'none';
    RenderContainer.style.borderBottom = '0px';

    VisualContent.style.display = 'none';
    VisualContainer.style.borderBottom = '0px';

    HCContent.style.display = 'none';
    HCContainer.style.borderBottom = '0px';

    HC2Content.style.display = 'block';
    HC2Container.style.borderBottom = '2px solid gold';

    JHContent.style.display = 'none';
    JumputiHeroesContainer.style.borderBottom = '0px';

    NBSContent.style.display = 'none';
    NBSContainer.style.borderBottom = '0px';
});

JHBtn.addEventListener('click', (e) => {
    e.preventDefault();

    RenderContent.style.display = 'none';
    RenderContainer.style.borderBottom = '0px';

    VisualContent.style.display = 'none';
    VisualContainer.style.borderBottom = '0px';

    HCContent.style.display = 'none';
    HCContainer.style.borderBottom = '0px';

    HC2Content.style.display = 'none';
    HC2Container.style.borderBottom = '0px';

    JHContent.style.display = 'block';
    JumputiHeroesContainer.style.borderBottom = '2px solid gold';

    NBSContent.style.display = 'none';
    NBSContainer.style.borderBottom = '0px';
});

NBSBtn.addEventListener('click', (e) => {
    e.preventDefault();

    RenderContent.style.display = 'none';
    RenderContainer.style.borderBottom = '0px';

    VisualContent.style.display = 'none';
    VisualContainer.style.borderBottom = '0px';

    HCContent.style.display = 'none';
    HCContainer.style.borderBottom = '0px';

    HC2Content.style.display = 'none';
    HC2Container.style.borderBottom = '0px';

    JHContent.style.display = 'none';
    JumputiHeroesContainer.style.borderBottom = '0px';

    NBSContent.style.display = 'block';
    NBSContainer.style.borderBottom = '2px solid gold';
});