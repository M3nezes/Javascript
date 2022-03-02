// função declarativa
function funcao(parametro){
     console.log('Olá Mundo! Essa mensagem veio de uma função.', parametro);
}

 funcao('Essa parte é um parâmetro.');

// expressoes de funções
// com nome
var funcao1 = function(){
    console.log('Essa mensagem é de uma função de expressão.');
}
funcao1();

// arrow function
var funcao2 = () =>{
    console.log('Essa é uma mensagem de uma arrow Function.');
}
funcao2();