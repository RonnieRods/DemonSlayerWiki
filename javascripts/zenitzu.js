const curImg = document.getElementById('curImg');
const type = document.getElementById('type');
const secType = document.getElementById('secType');
const expImg = document.getElementById('expImg');

const contentBtn = document.getElementById('contentBtn');
const contentList = document.getElementById('contentList');
const contentHeader = document.getElementById('contentHeader');

type.onclick = function () {
    curImg.src = "/../DemonSlayerWiki/images/Zenitsu_anime_design.webp";
    type.style.color = "rgba(255, 217, 0, 0.493)";
    secType.style.color = "white";
    expImg.href = "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/6/66/Zenitsu_anime.png/revision/latest?cb=20181128204231";
};

secType.onclick = function () {
    curImg.src = "/../DemonSlayerWiki/images/manga-zenitsu.webp"
    secType.style.color = "rgba(255, 217, 0, 0.493)";
    type.style.color = "white";
    expImg.href = "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/c/c2/Zenitsu_colored_body_3.png/revision/latest?cb=20200121221954"
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