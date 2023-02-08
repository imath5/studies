let menuMobile = document.querySelector('.home .header')
let botaoMenu = document.querySelector('.home .header')

let aberto = false // flag - variável de controle - estado de determinada aplicação

function abrirOuFecharMenu(){

    if(aberto === true){
        aberto = false
        menuMobile.classList.remove('menuMobile')
        botaoMenu.innerHTML = '☰'
    }else if (aberto === false){
        aberto = true
        menuMobile.classList.add('menuMobile')
        botaoMenu.innerHTML= '<b>Fechar Menu</b>'
    }
}