const valores = [7.7, 8.9, 6.3, 9.2] 
console.log(valores[0], valores[3]);
console.log(valores[4]); //Acessando um índice que não existe não dá erro, só dá undefined / em outras linguagens daria erro

valores[4] = 10
console.log(valores); //agora dá certo 

valores [10] = 15
console.log(valores); 
console.log(valores.length); //qtd de elementos

//Posso colocar tudo, um objeto, um boolean, um nulo e uma string: Claro que não é uma boa prática.
valores.push({id:3}, false, null, 'teste')
console.log(valores);

//Para excluir valores
console.log(valores.pop()); //ele mostra e exclui o último elementos
//ou
delete valores[0]
console.log(valores);