const curImg = document.getElementById('curImg');
const type = document.getElementById('type');
const secType = document.getElementById('secType');
const expImg = document.getElementById('expImg');

const spoiler = document.querySelector('#spoiler');
const showSpoiler = document.querySelector('#showSpoiler');

type.addEventListener('click', () => {
    curImg.src = "/images/Successor_Kiriya_anime.webp";
    type.style.color = "rgba(255, 217, 0, 0.493)";
    secType.style.color = "white";
    expImg.href = "#Pic1";
    curImg.addEventListener('click', () => {
        if (expImg.href = "#Pic1") {
            curImg.onclick = openModal();currentSlide(1);
        }
    })
})

secType.addEventListener('click', () => {
    curImg.src = "/images/Kiriya_taking_command.webp";
    secType.style.color = "rgba(255, 217, 0, 0.493)";
    type.style.color = "white";
    expImg.href = "#Pic2";
    curImg.addEventListener('click', () => {
        if (expImg.href = "#Pic2") {
            curImg.onclick = openModal();currentSlide(2);
        } 
    })
    
})

spoiler.onclick = function (e) {
    if (spoiler.innerHTML === 'Show') {
        e.preventDefault();
        spoiler.innerHTML = 'Hide';
        showSpoiler.innerHTML = 'Active <span class="tooltip-anchor" id="Ref2"><sup class="tooltip"><span class="tooltiptext"><i>Kimetsu no Yaiba</i> Manga: Chapter 205 (Page 14).</span><a href="#RefList2" class="link" id="Ref">[2]</a></sup></span>';
    } else {
        e.preventDefault();
        spoiler.innerHTML = 'Show';
        showSpoiler.innerHTML = '';
    }
};