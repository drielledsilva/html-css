var numero = 5;

console.log(numero);
console.log(typeof numero);

var float = 4.89;

console.log(float);
console.log(typeof float); // para o js não existe diferenciação entre números inteiros ou flutuantes, o tipo deles sempre vai ser um NUMBER

var textoComNumero = '454'

console.log(textoComNumero);
console.log(typeof textoComNumero); // não é considerado um número, é considerado uma STRING. não se soma números com strings

console.log(NaN);
console.log(typeof NaN);
console.log(typeof +Infinty);
console.log(typeof -Infinity);
// todos considerados NUMBER para o js