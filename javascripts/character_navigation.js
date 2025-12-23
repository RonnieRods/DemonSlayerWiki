// Table of Contents
const contentBtn = document.getElementById('contentBtn');
const contentList = document.getElementById('contentList');
const contentHeader = document.getElementById('contentHeader');

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

// Bottom Character Navigation Table
const navTableBtn = document.querySelector('#nav-table-btn');
const showNavTable = document.querySelector('#showNavTable');

navTableBtn.onclick = function (e) {
    if (navTableBtn.innerHTML === 'hide') {
        e.preventDefault();
        showNavTable.style.display = 'none';
        navTableBtn.innerHTML = 'show';
    } else {
        e.preventDefault();
        showNavTable.style.display = 'block';
        navTableBtn.innerHTML = 'hide';
    }
}