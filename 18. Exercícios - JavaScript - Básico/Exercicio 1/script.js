let nome = prompt("Digite o seu nome")
let idade = prompt ("Digite sua idade")

if (idade >= 18){
    document.write(`Olá ${nome}, você tem ${idade} ano(s) de idade, então você é maior de idade`)
} else {
    document.write(`Olá ${nome}, você tem ${idade} ano(s) de idade, então você é menor de idade`)
}
