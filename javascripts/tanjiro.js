const curImg = document.getElementById('curImg');
const type = document.getElementById('type');
const secType = document.getElementById('secType');
const expImg = document.getElementById('expImg');

const expandBtn = document.getElementById('expandBtn');
const hideAbl = document.getElementById('hideAbl');

const expandTechBtn = document.getElementById('expandTechBtn');
const hideTech = document.getElementById('hideTech');

const op1 = document.getElementById('op1');
const descOp = document.getElementById('descOp');
const op2 = document.getElementById('op2');
const demoOp = document.getElementById('demoOp');
const descTxt = document.getElementById('descTxt');
const demoTxt = document.getElementById('demoTxt');

const techTxt = document.getElementById('technique-text');
const demGifs = document.getElementById('demonstrationGifs');

const aniGif = document.getElementById('anime-gif');
const mangaPic = document.getElementById('manga-pic');
const gameGifs = document.getElementById('game-gifs');

type.onclick = function () {
    curImg.src = "/../DemonSlayerWiki/images/Tanjiro_Kamado.webp";
    type.style.color = "rgba(255, 217, 0, 0.493)";
    secType.style.color = "white";
    expImg.href = "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/d/dd/Tanjiro_Kamado_Full_Body_%28Anime%29.png/revision/latest?cb=20230117090856";
};

secType.onclick = function () {
    curImg.src = "/../DemonSlayerWiki/images/Tanjiro_Manga.webp";
    secType.style.color = "rgba(255, 217, 0, 0.493)";
    type.style.color = "white";
    expImg.href = "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/0/07/Tanjiro_colored_body_4.png/revision/latest?cb=20230117091004"
};

expandBtn.onclick = function (e) {
    if (expandBtn.innerHTML === 'Expand') {
        e.preventDefault();
        hideAbl.style.display = 'block';
        expandBtn.innerHTML = 'Collapse';
    } else {
        e.preventDefault();
        hideAbl.style.display = 'none';
        expandBtn.innerHTML = 'Expand';
    }
}

expandTechBtn.onclick = function (e) {
    if (expandTechBtn.innerHTML === 'Expand') {
        e.preventDefault();
        hideTech.style.display = 'block';
        expandTechBtn.innerHTML = 'Collapse';
    } else {
        e.preventDefault();
        hideTech.style.display = 'none';
        expandTechBtn.innerHTML = 'Expand';
    }
}

descOp.onclick = function (e) {
    e.preventDefault();
    op1.style.borderBottom = '2px solid gold';
    op2.style.borderBottom = '0px solid gold';
    descTxt.style.display = 'block';
    demoTxt.style.display = 'none';
}

demoOp.onclick = function (e) {
    e.preventDefault();
    op1.style.borderBottom = '0px solid gold';
    op2.style.borderBottom = '2px solid gold';
    descTxt.style.display = 'none';
    demoTxt.style.display = 'block';
}