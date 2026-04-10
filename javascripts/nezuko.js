const curImg = document.getElementById('curImg');
const type = document.getElementById('type');
const secType = document.getElementById('secType');
const expImg = document.getElementById('expImg');

const contentBtn = document.getElementById('contentBtn');
const contentList = document.getElementById('contentList');
const contentHeader = document.getElementById('contentHeader');

const techniques = document.getElementById('techniques');
const demonstrations = document.getElementById('demonstrations');
const techTxt = document.getElementById('technique-text');
const demGifs = document.getElementById('demonstrationGifs');

const animeDemo = document.getElementById('anime-demo');
const mangaDemo = document.getElementById('manga-demo');
const gameDemo = document.getElementById('game-demo');
const aniGif = document.getElementById('anime-gif');
const mangaPic = document.getElementById('manga-pic');
const gameGifs = document.getElementById('game-gifs');

type.onclick = function () {
    curImg.src = "images/nezuko.webp";
    type.style.color = "rgba(255, 217, 0, 0.493)";
    secType.style.color = "white";
    expImg.href = "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/4/4d/Nezuko_anime.png/revision/latest?cb=20211119014953";
};

secType.onclick = function () {
    curImg.src = "images/nezuko manga.webp";
    secType.style.color = "rgba(255, 217, 0, 0.493)";
    type.style.color = "white";
    expImg.href = "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/2/2c/Nezuko_colored_body.png/revision/latest?cb=20190721094528"
};

contentBtn.onclick = function (e) {
    if (contentBtn.innerHTML === 'hide') {
        e.preventDefault();
        contentList.style.display = 'none';
        contentHeader.style.borderBottom = '2px solid gray';
        contentBtn.innerHTML = 'show';
    } else {
        e.preventDefault();
        contentList.style.display = 'block';
        contentBtn.innerHTML = 'hide';
        contentHeader.style.borderBottom = '';
    }
}

techniques.onclick = function (e) {
    e.preventDefault();
    techTxt.style.display = 'block';
    demGifs.style.display = 'none';
}

demonstrations.onclick = function (e) {
    e.preventDefault();
    demGifs.style.display = 'block';
    techTxt.style.display = 'none';
}

animeDemo.onclick = function (e) {
    e.preventDefault();
    aniGif.style.display = 'block';
    mangaPic.style.display = 'none';
    gameGifs.style.display = 'none';
}

mangaDemo.onclick = function (e) {
    e.preventDefault();
    mangaPic.style.display = 'block';
    aniGif.style.display = 'none';
    gameGifs.style.display = 'none';
}

gameDemo.onclick = function (e) {
    e.preventDefault();
    gameGifs.style.display = 'block';
    aniGif.style.display = 'none';
    mangaPic.style.display = 'none';
}