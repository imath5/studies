let opcoes
for (let contador = 2022; contador >= 1900; contador--) {
   opcoes += `<option>${contador}</option>`
}

let selecionar = '<option>-- Selecionar --</option>'

document.querySelector('#ano').innerHTML = selecionar + opcoes

let lista = ''
let clientes = ['Thiago', 'Rafael', 'Fulano', 'Ciclano']

for (let contador = 0; contador<= clientes.length - 1; contador++){
    lista += `<li>${clientes[contador]} - ${contador}</li>`
}

document.querySelector('#listaClientes').innerHTML = lista