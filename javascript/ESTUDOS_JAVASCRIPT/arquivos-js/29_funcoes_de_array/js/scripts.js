// length - propriedade que dá a quantidade de elementos de um array

var arr = [1, 2, 3, 4, 5];

console.log(arr.length);

// push - adicionar elementos em um array (no fim do array)

arr.push(6);
arr.push('Qualquer coisa');

console.log(arr);

// pop - remover elementos de um array (fo dim do array)

arr.pop();

console.log(arr);

// unshift - adicionar elementos no começo de um array

arr.unshift(0);

console.log(arr);

// shift - remover um elemento do começo do array

arr.shift();

console.log(arr);

// acessar o último elemento de um array 

console.log(Array.isArray(5));

console.log(Array.isArray(arr));