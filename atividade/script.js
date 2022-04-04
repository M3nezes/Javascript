function comparaNumeros(a, b){
    const primeiraFrase = criaPrimeiraFrase(a, b);
    const segundaFrase = criaSegundaFrase(a, b);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase (a, b){
    let saoIguais = '';

    (a !== b) ? saoIguais = 'não' : saoIguais = '';

    return `Os números ${a} e ${b} ${saoIguais} são iguais.`
}

function criaSegundaFrase (a, b){
    const soma = a + b;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        resultado10 = 'maior';
    }

    if(compara20){
        resultado20 = 'menor';
    }

    return `Soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros(8 , 8));