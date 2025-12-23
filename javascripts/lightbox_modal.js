// For Picture Gallery Modal Lightbox
function openModal() {
    document.getElementById("myModal").style.display = "block";
};

function closeModal() {
    document.getElementById("myModal").style.display = "none";
};

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
};

function currentSlide(n) {
    showSlides(slideIndex = n);
};

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
    // Reverts to the first image of the gallery once it reaches the end
    if (n > slides.length) {
        nextBtn.href = "#Pic1";
    } else {
        nextBtn.href = `#Pic${n}`;
    }
    // Reverts to the last image of the gallery goes below the first picture of the gallery
    if (n < 1) {
        prevBtn.href = `#Pic${slides.length}`;
    } else {
        prevBtn.href = `#Pic${n}`;
    }

}