let prompt = require('prompt-sync')();

function calculadora(x, y, z) {

    switch (z) {
        case 1:
            return x + y;
            break;
        case 2:
            return x - y;
            break;
        case 3:
            return x * y;
            break;
        case 4:
            return x / y;
            break;
        default:
            return 0;
    }
}

let op;

while (op != 0) {
    console.log("+-------------------------------+")
    console.log("|      Menu da Calculadora      |")
    console.log("|                               |")
    console.log("|1. Soma                        |")
    console.log("|2. Subtração                   |")
    console.log("|3. Multiplicação               |")
    console.log("|4. Divisão                     |")
    console.log("|0. Sair da Calculadora         |")
    console.log("+-------------------------------+")


    op = parseInt(prompt("   Digite a opção desejada(Utilize apenas números): "))
    if (op === 0) {
        console.log("Fechando calculadora...")
        break;
    }
    if (op === 1 || op === 2 || op === 3 || op === 4) {
        let num1 = parseFloat(prompt("   Digite o primeiro valor: "))
        let num2 = parseFloat(prompt("   Digite o primeiro valor: "))
        let conta = calculadora(num1, num2, op);
        console.log(`O resultado da sua operação é: ${conta}`)
    } else {
        console.log("Opção inválida, tente outra opção")
        console.log("")
        console.log("")
    }
}






