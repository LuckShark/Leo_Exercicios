const prod1 = {} //objeto vazio
//posso colocar as características dele dinamicamente 
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 //posso usar até espaços / porém evite esses atributos, não é boa prática

console.log(prod1);

//Outra maneira de criar:
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}
console.log(prod2);