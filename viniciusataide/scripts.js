/*Configuração menu Mobile*/

function mostraMenu() {
    var menuMobile = document.querySelector('.mobileMenu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "imagens/menuAbre.png"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "imagens/menuFecha.png"

    }
}

/*  Função checa formulário */

var nome = document.getElementById('cNome')
var assunto = document.getElementById('cAssunto')
var msg = document.getElementById('cMensagem')
var alertErro = document.getElementById('alertErro')
var alertSucesso = document.getElementById('alertSucesso')
var envia = document.getElementById('envia')

function verificar() {
    if (nome.value == '') {
        nome.focus();
        alertErro.innerHTML = 'Digite seu Nome'
        alertErro.style.display = 'block'
        setTimeout(() => {
            alertErro.style.display = 'none';
        }, 3000);
        return false;
    }
    if (assunto.value == '') {
        assunto.focus();
        alertErro.innerHTML = 'Digite o Assunto'
        alertErro.style.display = 'block'
        setTimeout(() => {
            alertErro.style.display = 'none';
        }, 3000);
        return false;
    }
    if (msg.value == '') {
        msg.focus();
        alertErro.innerHTML = 'Digite Uma Mensagem!'
        alertErro.style.display = 'block'
        setTimeout(() => {
            alertErro.style.display = 'none';
        }, 3000);
        return false;
    }
    else {
        envia.click();
        alertSucesso.style.display = 'block'
        setTimeout(() => {
            alertSucesso.style.display = 'none';
        }, 3000);
    }
}

/* Função mostrar mais e mostrar menos Section Experiências Proficcionais */

function leiaMaisEc() {
    var pontosEc = document.getElementById('pontosEc')
    var maisTextoEc = document.getElementById('maisEc')
    var btnLeiaMaisEc = document.getElementById('btnLeiaMaisEc')

    if (pontosEc.style.display == 'none') {
        pontosEc.style.display = 'inline'
        maisTextoEc.style.display = 'none'
        btnLeiaMaisEc.innerText = 'Leia Mais'
    } else {
        pontosEc.style.display = 'none'
        maisTextoEc.style.display = 'inline'
        btnLeiaMaisEc.innerText = 'Leia Menos'
    }
}
function leiaMaisCa() {
    var pontosCa = document.getElementById('pontosCa')
    var maisTextoCa = document.getElementById('maisCa')
    var btnLeiaMaisCa = document.getElementById('btnLeiaMaisCa')

    if (pontosCa.style.display == 'none') {
        pontosCa.style.display = 'inline'
        maisTextoCa.style.display = 'none'
        btnLeiaMaisCa.innerText = 'Leia Mais'
    } else {
        pontosCa.style.display = 'none'
        maisTextoCa.style.display = 'inline'
        btnLeiaMaisCa.innerText = 'Leia Menos'
    }
}
function leiaMaisEp() {
    var pontosEp = document.getElementById('pontosEp')
    var maisTextoEp = document.getElementById('maisEp')
    var btnLeiaMaisEp = document.getElementById('btnLeiaMaisEp')

    if (pontosEp.style.display == 'none') {
        pontosEp.style.display = 'inline'
        maisTextoEp.style.display = 'none'
        btnLeiaMaisEp.innerText = 'Leia Mais'
    } else {
        pontosEp.style.display = 'none'
        maisTextoEp.style.display = 'inline'
        btnLeiaMaisEp.innerText = 'Leia Menos'
    }
}
function leiaMaisHdo() {
    var pontosHdo = document.getElementById('pontosHdo')
    var maisTextoHdo = document.getElementById('maisHdo')
    var btnLeiaMaisHdo = document.getElementById('btnLeiaMaisHdo')

    if (pontosHdo.style.display == 'none') {
        pontosHdo.style.display = 'inline'
        maisTextoHdo.style.display = 'none'
        btnLeiaMaisHdo.innerText = 'Leia Mais'
    } else {
        pontosHdo.style.display = 'none'
        maisTextoHdo.style.display = 'inline'
        btnLeiaMaisHdo.innerText = 'Leia Menos'
    }
}

function leiaMaisRncc() {
    var pontosRncc = document.getElementById('pontosRncc')
    var maisTextoRncc = document.getElementById('maisRncc')
    var btnLeiaMaisRncc = document.getElementById('btnLeiaMaisRncc')

    if (pontosRncc.style.display == 'none') {
        pontosRncc.style.display = 'inline'
        maisTextoRncc.style.display = 'none'
        btnLeiaMaisRncc.innerText = 'Leia Mais'
    } else {
        pontosRncc.style.display = 'none'
        maisTextoRncc.style.display = 'inline'
        btnLeiaMaisRncc.innerText = 'Leia Menos'
    }
}