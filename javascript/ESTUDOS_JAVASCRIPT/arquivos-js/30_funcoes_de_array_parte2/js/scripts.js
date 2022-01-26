// splice - adicionar e remover elementos no meio de um array

var arr = [1,2,3,4,5];

arr.splice(2, 0, 75);
 /* primeiro parâmetro é o índice do array que vem antes do que você quer adicionar, o segundo parâmetro é a quantidade e elementos que eu quero deletar do array, e o último parâmetro é o elemento que eu quero adicionar */

 console.log(arr);

 // removendo um elemento

 arr.splice(4, 1);

 console.log(arr);

 // indexOf

 console.log(arr.indexOf(5));

 // join - transformar um array em uma string

 var arr2 = ['O', 'rato', 'roeu', 'a', 'roupa', 'do', 'rei', 'de', 'Roma'];

 console.log(arr2.join(" "));

 // reverse - inverter arrays

 console.log(arr2.reverse()); 
