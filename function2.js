//Armazenando uma função numa variável
const imprimirSoma = function (a, b) { //função anônima
    console.log(a  + b);
}
imprimirSoma(2,3)

//Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}
console.log(soma(2,3));

//diminuindo ainda mais a sintaxe (retorno implícito)
const subtracao = (a, b) => a - b
console.log(subtracao(2,3));

//reduzindo ainda mais (só 1 parametro)
const imprimir2 = a => console.log(a); //aí nesse casp não preciso usar parênteses 
imprimir2('Legal!')