function start (){
    let inputNome = prompt("Informe o seu nome: ")
    let inputIdade = prompt("Informe a sua idade: ")

    let htmlMessages =''
    let htmlMMatrix =''

    if (inputNome === "Thomas Anderson" && inputIdade >= 18){
        htmlMessages =`
        <h1>Bem vindo a plataforma ${inputNome}!</h1><br><br>`
        document.querySelector('#h1').innerHTML = htmlMessages;
        htmlMMatrix = `
        <h2>Você é um personagem de Matrix!</h2>`
        document.querySelector('#h2').innerHTML = htmlMMatrix;
    }

    else if (inputNome !== "Thomas Anderson" && inputIdade >= 18){
        htmlMessages =`
        <h1>Bem vindo a plataforma ${inputNome}! </h1>`
        document.querySelector('#h1').innerHTML = htmlMessages;
    }

    else if (inputNome !== "Thomas Anderson" && inputIdade < 18){
        htmlMessages =`
        <h1> ${inputNome} Você não é bem vindo a plataforma, pois não possui idade suficiente! </h1>`
        document.querySelector('#h1').innerHTML = htmlMessages;
    }

    

}




