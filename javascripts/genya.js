const curImg = document.getElementById('curImg');
const type = document.getElementById('type');
const secType = document.getElementById('secType');
const expImg = document.getElementById('expImg');

const contentBtn = document.getElementById('contentBtn');
const contentList = document.getElementById('contentList');
const contentHeader = document.getElementById('contentHeader');
const spoiler = document.querySelector('#spoiler');
const showSpoiler = document.querySelector('#showSpoiler');

type.onclick = function() {
    curImg.src = "images/Genya_Shinazugawa_Full_Body_29.webp";
    type.style.color = "rgba(255, 217, 0, 0.493)";
    secType.style.color = "white";
    expImg.href = "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/c/cb/Genya_Shinazugawa_Full_Body_%28Anime%29.png/revision/latest?cb=20230618125148";
}

secType.onclick = function() {
    curImg.src = "images/Genya_colored_body.webp";
    secType.style.color = "rgba(255, 217, 0, 0.493)";
    type.style.color = "white";
    expImg.href = "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/c/c2/Genya_colored_body.png/revision/latest?cb=20191221220010";
}

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

spoiler.onclick = function (e) {
    if (spoiler.innerHTML === 'Show') {
        e.preventDefault();
        spoiler.innerHTML = 'Hide';
        showSpoiler.innerHTML = 'Deceased';
    } else {
        e.preventDefault();
        spoiler.innerHTML = 'Show';
        showSpoiler.innerHTML = '';
    }
}