const spoiler = document.querySelector('#spoiler');
const showSpoiler = document.querySelector('#showSpoiler');


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
};