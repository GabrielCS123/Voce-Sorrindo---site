const botaoMenu = document.querySelector('.botao_menu_apertar')
const botaoMenuAberto = document.querySelector('.botao_menu_aberto_apertar')
let bataoApertado = false

function AbrirMenu() {
    document.getElementById('menu_aberto').style.display = 'flex';
    document.querySelector('header').style.display = 'none';
    document.querySelector('main').style.display = 'none';
    document.querySelector('footer').style.display = 'none';
    document.body.style.overflow = 'hidden';
    bataoApertado = true
}

function fecharMenu() {
    document.getElementById('menu_aberto').style.display = 'none';
    document.querySelector('header').style.display = 'flex';
    document.querySelector('main').style.display = 'block';
    document.querySelector('footer').style.display = 'block';
    document.body.style.overflow = 'auto';
    bataoApertado = false
}

botaoMenu.onclick = function () {
    AbrirMenu()
}

botaoMenuAberto.onclick = function () {
    fecharMenu()
}