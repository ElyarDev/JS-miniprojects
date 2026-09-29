// SELECT VARIABLES
const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');
const preLoader = document.querySelector('.preloader');

// SWITCH BUTTON
btn.addEventListener('click', function () {
    if (!btn.classList.contains('slide')) {
        btn.classList.add('slide');
        video.pause();
    }
    else {
        btn.classList.remove('slide');
        video.play();
    }
})

// PRELOADER
window.addEventListener('load', function () {
    preLoader.classList.add('hide-preloader');
})