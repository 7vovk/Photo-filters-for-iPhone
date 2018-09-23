//Main page engine

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" main-active", "");
    }
    document.getElementById("picsSrc").src = 'img/img' + [slideIndex - 1] + '.jpg';
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " main-active";
}

//Edit window engine
var filterIndex = 1;
showFilter(filterIndex);

function plusFilter(n) {
    showFilter(filterIndex += n);
}

function currentFilter(n) {
    showFilter(filterIndex = n);
}

function showFilter(n) {
    var i;
    var pic = document.getElementById("pic");
    var filter = document.getElementsByClassName("filter-wrapper");
    var choose = document.getElementsByClassName("choose");
    var text = document.getElementsByClassName("filter-name");
    if (n > filter.length) {
        filterIndex = 1;
    }
    if (n < 1) {
        filterIndex = filter.length
    }
    for (i = 0; i < choose.length; i++) {
        choose[i].className = choose[i].className.replace(" window-active", "");
        text[i].className = text[i].className.replace(" text-active", "");
    }
    choose[filterIndex - 1].className += " window-active";
    text[filterIndex - 1].className += " text-active";
    pic.className = "filter" + [n - 1];
}


//Scroll filters to center

var button0 = document.getElementById('filter0');
var button1 = document.getElementById('filter1');
var button2 = document.getElementById('filter2');
var button3 = document.getElementById('filter3');
var button4 = document.getElementById('filter4');
var button5 = document.getElementById('filter5');
var button6 = document.getElementById('filter6');
var button7 = document.getElementById('filter7');
var button8 = document.getElementById('filter8');
var chooseFiltersWindow = document.getElementById('choose-filters')

button0.onclick = function () {
    chooseFiltersWindow.scrollLeft = 0;
}
button1.onclick = function () {
    chooseFiltersWindow.scrollLeft = 0;
}
button2.onclick = function () {
    chooseFiltersWindow.scrollLeft = 100;
}
button3.onclick = function () {
    if (chooseFiltersWindow.scrollLeft != 330) {
        chooseFiltersWindow.scrollLeft = 330;
    } else {
        chooseFiltersWindow.scrollLeft = 100;
    }
}
button4.onclick = function () {
    if (chooseFiltersWindow.scrollLeft != 560) {
        chooseFiltersWindow.scrollLeft = 560;
    } else {
        chooseFiltersWindow.scrollLeft = 330;
    }
}
button5.onclick = function () {
    if (chooseFiltersWindow.scrollLeft != 790) {
        chooseFiltersWindow.scrollLeft = 790;
    } else {
        chooseFiltersWindow.scrollLeft = 560;
    }
}
button6.onclick = function () {
    if (chooseFiltersWindow.scrollLeft != 1020) {
        chooseFiltersWindow.scrollLeft = 1020;
    } else {
        chooseFiltersWindow.scrollLeft = 790;
    }
}
button7.onclick = function () {
    chooseFiltersWindow.scrollLeft = 1500;
}
button8.onclick = function () {
    chooseFiltersWindow.scrollLeft = 1500;
}


//Toggle

function toggle() {
    var main = document.getElementById("main");
    var edit = document.getElementById("edit");
    var back = document.getElementById("back");
    if (main.style.display === "none") {
        main.style.display = "block";
        edit.style.display = "none";
        back.classList.remove("back-bg-2");
        back.classList.add("back-bg");
    } else {
        main.style.display = "none";
        edit.style.display = "block";
        back.classList.add("back-bg-2");
        back.classList.remove("back-bg");
    }
}
