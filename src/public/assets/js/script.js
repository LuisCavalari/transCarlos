
window.onload = () => {
    const buttonMenu = document.getElementById('menu-mobile')
    const closeButton = document.querySelector('.nav-mobile-close')
    const toast = document.querySelector('.toast')
    if (toast)
        destroyElement(toast)
    buttonMenu.onclick = toogleMenuMobile
    closeButton.onclick = toogleMenuMobile
}

function destroyElement(element) {
    setTimeout(() => {
        element.style.opacity = '0'
    }, 5000)
}

function toogleMenuMobile() {
    const menuMobile = document.querySelector('.nav-mobile')
    menuMobile.classList.toggle('active')
}