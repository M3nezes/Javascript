var variavel = 'string';
console.log(variavel);

let variavel1 = 32;
console.log(variavel1);

const constante = false;
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let varLocal = 'interno';
    console.log(varLocal);
}
escopoLocal();

/* comparação */

var comparacao = '23' == 23;
console.log(comparacao);

/* comparacao espeecifica */

var especifica = '23' === 23;
console.log(especifica)

/*operações aritméticos */

var soma = 2 + 5;
console.log(soma);

var subtracao = 5 - 2;
console.log(subtracao);

var multiplicacao = 2 * 3;
console.log(multiplicacao);

var divisao = 5 / 2;
console.log(divisao);

var resto = 5 % 2;
console.log(resto);

/* relaçõs */

var maiorQ = 5 > 2;
console.log(maiorQ);

var menorQ = 5 < 3;
console.log(menorQ);

var maiorOuIgual = 5 >= 3;
console.log(maiorOuIgual);

var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

/* vetores */

let array = ['string', 2, true,];
console.log(array);

var array2 = ['string', 23, false, ['array', 2, true], 'guilherme', ['array', 3, false]];
console.log(array2);

/* metodos */

array2.forEach(function(item, index){console.log(item, index)});

array2.push('novo item no final');
console.log(array2);

array2.pop();
console.log(array2);

array2.shift();
console.log(array2);

array2.unshift('novo item no inicio');
console.log(array2);

console.log(array2.indexOf('guilherme'));

array2.splice(4, 5);
console.log(array2);

let novoArray = array2.slice(2);
console.log(novoArray);

/* objetos */

let object = { nome: 'objeto', number: 1, boolean: true, array: ['string', 2, false], objectInterno: {nome: 'objeto interno'}};

console.log(object);

console.log(object.objectInterno);

var string = object.nome;
console.log(string);

var arrayIntero = object.array;
console.log(array);

var {nome, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);
