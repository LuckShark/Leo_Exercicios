//função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}
imprimirSoma(2, 3) //resposta: 2 + 3 = 5
imprimirSoma(2) //resposta: 2 + undefined = NaN
imprimirSoma(2, 3, 4, 5, 6) //resposta: 5 -> ele pega os 2 primeiros e ignora o resto.
imprimirSoma() // resposta: undefined + undefined = NaN
imprimirSoma('José', 'Maria') //resposta: JoséMaria (string ele concatena)

//Função com retorno
function soma(a=0, b=0) {
    return a + b
} //note que a função não tem o console.log
console.log(soma(2,3)); //resposta: 5
console.log(soma(2)); //resposta: 2 (fica 2 + 0)
console.log(soma());//resposta: 0 (fica 0 + 0, por que a e b foram tratados)