let clientes = [
    {
        nome: 'Matheus',
        idade: 25,
        linguagens: ['HTML', 'CSS', 'JAVASCRIPT']
    },

    {
        nome: 'Fulano',
        idade: 21,
        linguagens: ['PYTHON', 'C#', 'JAVA']
    },

    {
        nome: 'Paulo',
        idade: 30,
        linguagens: ['C', 'CLOSURE', 'GO']
    }
]

// # UMA FORMA DE PERCORRER O ARRAY DE OBJETOS //
/*for (let contador = 0; contador < clientes.length; contador++){
 console.log (clientes[contador].nome)
}*/ 

// # FORMA SIMPLIFICADA DE PERCORRER O ARRAY DE OBJETOS //

let htmlClientes =''

for (let cliente of clientes){

    let listaLinguagens = ''

    for(let linguagem of cliente.linguagens){
        listaLinguagens += `<li>${linguagem}</li>`
    }

    htmlClientes += `
    <li>
        <b>Nome:</b> ${cliente.nome} <br>
        <b>Idade:</b> ${cliente.idade} <br>
        <b>Linguagens:</b><br>
        <ul>
            ${listaLinguagens}
        </ul>
    </li>
     `
}
document.querySelector('#listaClientes').innerHTML = htmlClientes;

