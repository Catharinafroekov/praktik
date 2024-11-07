const menuButton = document.querySelector('.menu_button');
const menu = document.querySelector('.nav-bar ul');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('open');
    menuButton.classList.toggle('open');
});
