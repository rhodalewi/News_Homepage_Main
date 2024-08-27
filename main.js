const container = document.querySelector('#body');
const iconMenu = document.querySelector('.icon-menu');
const closeMenu = document.querySelector('.closeMenu');
const mobileLinks = document.querySelector('.mobileLinks');
const homeLink = document.querySelector('.home');
const newLink = document.querySelector('.new');
const popularLink = document.querySelector('.popular');
const trendingLink = document.querySelector('.trending');
const categoriesLink = document.querySelector('.categories');

    iconMenu.addEventListener('click', function() {
        mobileLinks.classList.add('show');
        container.classList.add('opacity');
    })

    closeMenu.addEventListener('click', function() {
        mobileLinks.classList.remove('show');
        container.classList.remove('opacity');
    })



// LINK BUTTON
homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    mobileLinks.classList.remove('show');
    container.classList.remove('opacity');
});

newLink.addEventListener('click', (e) => {
    e.preventDefault();
    mobileLinks.classList.remove('show');
    container.classList.remove('opacity');
});

popularLink.addEventListener('click', (e) => {
    e.preventDefault();
    mobileLinks.classList.remove('show');
    container.classList.remove('opacity');
});

trendingLink.addEventListener('click', (e) => {
    e.preventDefault();
    mobileLinks.classList.remove('show');
    container.classList.remove('opacity');
});

categoriesLink.addEventListener('click', (e) => {
    e.preventDefault();
    mobileLinks.classList.remove('show');
    container.classList.remove('opacity');
});