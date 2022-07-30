{
    {
        {
            {
                var sera = 'Será?'
            }
        }
    }
}

console.log(sera);

function teste(){
    var local = 123 //agora o escopo vai ser apenas dentro da função.
}
teste() //ele chamou aqui só pq quis, só pra ele executar o código.
console.log(local);