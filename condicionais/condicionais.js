var jogador1 = 0;
var jogador2 = 0;
var placar;

// if teernário
jogador1 < 0 || jogador2 < 0 ? console.log('Um dos jogadores é inválido.') : console.log('Ambos jogadores são válidos');

// usando if
    if (jogador1 > 0 && jogador2 < jogador1){
        placar = jogador1 > jogador2;
        console.log('Jogador 1 marcou ponto.');
    }
// usando else if  
    else if (jogador2 > 0 && jogador1 < jogador2) {
        placar = jogador2 > jogador1;
        console.log('Jogador 2 marcou ponto.');
    } 
// usando else
    else {
        console.log('Ninguém marcou ponto');
    }

// switch case
switch (placar){
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou!!!');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou!!!');
        break;
    default:
        console.log('Ninguém ganhou.');
}

// for, executa uma repetição até que ela seja falsa

var array = ['guilherme', 'eugenio', 'leonardo'];
let object = {nome: 'objeto', tamanho: 5, capacidade: true};

for (let indice = 0; indice < array.length; indice++){
    console.log(indice);
}

// for/in executa uma repetição a partir de uma propriedade
for (let i in array){
    console.log(i);
}

// com object
for (i in object){
    console.log(i);
}

// for/of executa uma repetição a partir de um valor
for (i of array){
    console.log(i);
}

// com object - não funciona
for (i of object.nome){
    console.log(i)
}

// while executa repetição com verificação no começo da condição
var a = 0;

while (a < 10){
    console.log(a);
    a++;
}

// do while executa repeptição com verificação no final da condição
 
var a = 0;
do {
    console.log(a);
    a++
} while (a < 10);