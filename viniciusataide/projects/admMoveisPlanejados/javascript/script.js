function mostraMenu() {
    var menuMobile = document.querySelector('.mobileMenu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "imagens/menuOpen.png"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "imagens/menuClose.png"

    }
}
