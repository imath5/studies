
// SELETOR POR ID
document.querySelector('#titulo').innerHTML = '<i>Exemplo</i>'

//SELETOR POR TAG
document.querySelector('a').innerText = '<b>Ancora</b>'

    /*QuerySelector vai selecionar somente 1 elemento 
    (o primeiro), se eu quiser pegar mais de um elementos, 
    tenho que usar outra forma.
    QuerySelectorAll - Seleciona TODOS os elementos*/

 // SELECIONANDO MAIS DE 1 ITEM POR TAG
let ancoras = document.querySelectorAll('a')

 ancoras.forEach(function(elemento){      // forEach - somente para arrays (função anônima // callback)
    elemento.innerHTML = 'Teste'
    })

//SELECIONANDO MAIS DE 1 ITEM POR CLASSE
let boxes = document.querySelectorAll('.box')

boxes.forEach(function(box, index){
    box.innerHTML ='div ' + (index +1)
})


