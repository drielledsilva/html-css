var nome = 'Drielle';
var sobrenome = 'Silva';

console.log(nome);
console.log(typeof nome);

var nomeCompleto = nome + " " + sobrenome;

console.log(typeof "hgash");

console.log(nomeCompleto);

console.log(typeof "54678"); // um número entre aspas é considerado uma STRING

var frase = 'Esta é uma frase complexa';

console.log(frase);
console.log(typeof frase);

// tanto faz usar aspas simples ou duplas desde que se mantenha o padrão do começo do código ao fim do código. Concatenar duas strings (uma dentro de aspas simples e outra dentro de aspas duplas) funciona, o js não diferencia. Para o js, os dois são strings

document.write('Ele disse: "Olá"'); 
// Para que uma frase seja escrita entre aspas para o usuário, a string deve estar dentro de aspas simples e a palavra/frase que ficará entre aspas, entre aspas duplas. Ou ao contrário

document.write("Ele disse: 'Olá'");