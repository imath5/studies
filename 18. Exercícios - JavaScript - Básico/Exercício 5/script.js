let numeroTabuada = prompt ('Digite qual tabuada você quer saber:')
let tabuada = parseInt(numeroTabuada)

let resultado =''

for (let cont=0 ;cont<=10; cont++){
   let res = numeroTabuada * cont;

    resultado += `
    ${numeroTabuada}*${cont} = ${res}<br>
    `
}

document.querySelector('#h1').innerHTML = resultado;

