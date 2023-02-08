// var, let e const

// var está em desuso - causa problemas, sistemas grandes causam problemas, variaveis globais,

//string
//var nome = 'Matheus'

//number
//var idade = 35 

//console.log (nome)

//console.log (idade)

// PARA CRIAÇÃO DE VARIÁVEIS, USAR LET - TEM FUNCIONAMENTO DENTRO DE ESCOPO
let nome1 = 'Matheus'
nome1 = 'Teteus'

console.log (nome1)

// NÃO TEM COMO MUDAR COM CONST, NUNCA MUDA, CONSISTENCIA NO SISTEMA (MENOS BUG NO SISTEMA)
const nome ='Matheus' 
//nome = 'Teteus'

console.log (nome)

// usar camel case para criar variaveis dessa forma:
let nomeCompletoUsuario // Camel case - Juntos com segunda letra maiuscula