
window.onload = () => {
    const buttonMenu = document.getElementById('menu-mobile')
    const closeButton = document.querySelector('.nav-mobile-close')
    buttonMenu.onclick = toogleMenuMobile
    closeButton.onclick = toogleMenuMobile
}

function toogleMenuMobile() {
    const menuMobile = document.querySelector('.nav-mobile')
    menuMobile.classList.toggle('active')

}