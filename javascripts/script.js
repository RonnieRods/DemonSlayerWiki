const animeBtn = document.querySelector('#anime-char-tab');
const mangaBtn = document.querySelector('#manga-char-tab');
const animeContent = document.querySelector('#anime-content');
const mangaContent = document.querySelector('#manga-content');
const op1 = document.querySelector('#op1');
const op2 = document.querySelector('#op2');

animeBtn.onclick = function(e) {
    e.preventDefault();
    op1.style.borderBottom = '2px solid gold';
    op2.style.borderBottom = '0px solid gold';
    animeContent.style.display = 'block';
    mangaContent.style.display = 'none';
}

mangaBtn.onclick = function(e) {
    e.preventDefault();
    op1.style.borderBottom = '0px solid gold';
    op2.style.borderBottom = '2px solid gold';
    animeContent.style.display = 'none';
    mangaContent.style.display = 'block';
}