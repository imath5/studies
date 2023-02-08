let inputNome = prompt("Digite o seu nome")
let inputIdade = prompt("Digite a sua idade")

let mensagem
let maiorOuMenor

if (inputIdade >= 18)
{
    maiorOuMenor = 'maior de idade'
} else {
    maiorOuMenor = 'menor de idade'
}

if (inputNome === 'Thomas Anderson')
{
    mensagem = 'Olá neo, Você um personagem da Matrix!'
}

document.write (`Ola ${inputNome}, sua idade é ${inputIdade}, portanto você é ${maiorOuMenor}. ${mensagem}`)

