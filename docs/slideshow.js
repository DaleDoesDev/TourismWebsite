var slideIndex = 1;
var changingImages = document.getElementsByClassName("changing");

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    if (changingImages[0] != null) {
        changingImages[0].classList.remove("changing");
        if (n > 0) {
            n = 0;
        } else {
            n -= 1;
        }
    } 
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    if (changingImages[0] != null) {
        changingImages[0].classList.remove("changing");
    } 
    showSlides(slideIndex = n);
}

function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";


    if (changingImages[0] != null) {
        var t = setTimeout(showSlides, 2000); // Change image every 2 seconds
        slideIndex += 1;
    } else {
        clearTimeout(t);
    }
}