// length - propriedade que muda o comprimento ou a quantidade de caracteres que uma string possui

var nome = 'Annie';

console.log(nome.length);

var objeto = 'Bola';

console.log(objeto.length);

// indexOf dá o índice de algum caractere ou string que eu quero verificar em um texto

console.log(nome[2]);

var frase = 'Um sonho dentro de um sonho';

console.log(frase.indexOf('dentro'));

// slice - remove palavras da string

var dentro = frase.slice(9, 15);

console.log(dentro);

// replace - substitui palavras de uma string

var novaFrase = frase.replace('dentro', 'teste');

console.log(novaFrase);