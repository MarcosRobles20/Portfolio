function toogleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = menu.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');

}