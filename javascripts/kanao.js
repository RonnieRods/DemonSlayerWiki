const curImg = document.getElementById('curImg');
const type = document.getElementById('type');
const secType = document.getElementById('secType');
const expImg = document.getElementById('expImg');

const contentBtn = document.getElementById('contentBtn');
const contentList = document.getElementById('contentList');
const contentHeader = document.getElementById('contentHeader');

type.onclick = function() {
    curImg.src = "images/Kanao_anime_right_face.webp";
    type.style.color = "rgba(255, 217, 0, 0.493)";
    secType.style.color = "white";
    expImg.href = "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/0/02/Kanao_anime_right_face.png/revision/latest?cb=20241227050721";
}

secType.onclick = function() {
    curImg.src = "images/Kanao_colored_body_2.webp";
    secType.style.color = "rgba(255, 217, 0, 0.493)";
    type.style.color = "white";
    expImg.href = "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/b/bf/Kanao_colored_body_2.png/revision/latest/scale-to-width-down/1000?cb=20220817214750";
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