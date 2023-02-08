/*
string
number
biikeab
array
object
undefined
null

*/


// STRING
let nome = "Matheus" 
    console.log (nome)

 // String - Concatenada (Maneira antiga)
 let sobrenome = "Carvalho"
    console.log (nome +' '+ sobrenome)

// String literal - mais prático
    console.log(`${nome} ${sobrenome}`)

// number
let idade = 35
        console.log(`${idade}`)
        console.log(idade + 10)

// number - float
let porcentagem = 10.2
console.log (porcentagem + "%")

// boolean (true ou false)
let maiorDeIdade = true
    console.log (maiorDeIdade)

let menorDeIdade = false
    console.log (menorDeIdade)

// array "gaveta"

let habilidades = ['JavaScript','Python', 'PHP', '122']
    console.log (habilidades)
    console.log(habilidades.length)
    console.log(habilidades[3])
//

// object

let pessoa = {
    nome: 'Fulano',
    sobrenome: 'da Silva',
    idade: 25,
    habilidades: ['C++', 'C#', 'Python', 'JavaScript']
}

    console.log(pessoa)
    console.log (pessoa.habilidades)

//undefined

let endereco
    console.log(endereco)

// null

let cidade = null
    console.log (cidade)