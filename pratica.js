// funções
/*

function soma(a,b){
    return a + b;
}

const soma = (a,b) => {
    return a + b;
}
*/

// sincrona  = retorna valor, ojeto
// assincrona = retorna uma promise de um valor, objeto

// var - globar
// let - escopo limitado
// const - constante

let resultado = 0
const soma = async(a, b) =>{
    setTimeout(()=> {resultado = a + b;}, 5000);
}

const x = 10;
const y = 20;

await soma(x, y);

const j = resultado * 3

console.log(j);

