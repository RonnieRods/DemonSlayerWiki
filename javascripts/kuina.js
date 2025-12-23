const curImg = document.getElementById('curImg');
const type = document.getElementById('type');
const secType = document.getElementById('secType');
const expImg = document.getElementById('expImg');

const spoiler = document.querySelector('#spoiler');
const showSpoiler = document.querySelector('#showSpoiler');

type.addEventListener('click', () => {
    curImg.src = "/images/Kuina_29.webp";
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
    curImg.src = "/images/Kuina.webp";
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
        showSpoiler.innerHTML = 'Active <small>(Pre-Timeskip)</small><br> Deceased <small>(Post-Timeskip)</small>';
    } else {
        e.preventDefault();
        spoiler.innerHTML = 'Show';
        showSpoiler.innerHTML = '';
    }
};