let notaInput1 = prompt ('Insira a nota 1')
let notaInput2 = prompt ('Insira a nota 2')

    let nota1 = parseInt (notaInput1)
    let nota2 = parseInt (notaInput2)

    let mediaMinima = 7
    let media = (nota1 + nota2)/2



if (media > mediaMinima) {

    document.write ('Ok, passou de ano!')
}
else if (media < mediaMinima) {
    document.write('Ops, não passou de ano.')
}

document.write("<br>")

if (media>=mediaMinima && media === 10){
    document.write ("Nossa, você foi muito bem, continue assim!")
} else if (media >= mediaMinima && media === 9){
    document.write("Você mandou bem! Vamos tentar chegar na média 10?")
}
10

9
