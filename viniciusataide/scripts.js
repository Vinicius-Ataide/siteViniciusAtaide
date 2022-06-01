/*  Função formulário */
const form = document.getElementById('fContato')
const nome = document.getElementById('cNome')
const assunto = document.getElementById('cAssunto')


form.addEventListener('submit', (e) => {
    e.preventDefault;
    checkInputs();
});

function checkInputs(){
    const nomeValue = nome.Value;
    const assuntoValue = assunto.Value;

    if(nomeValue === ''){
        setErrorFor(nome, 'O Campo é obrigatório!');
    }else{
        setSuccessFor(nome);
    }

    if (assuntoValue ===''){
        setErrorFor(assunto, 'O campo é obrigatório!');
    }
    setSuccessFor(assunto);
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");


    small.innerText = message;

    formControl.className = "form-control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    formControl.className = "form-control success";
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