// criando um array(lista)
let lista = ['Laranja', 'Uva', 'Maçã', 'Banana', 'Abacaxi'];

// criar no HTML uma ul(lista) a partir dos elementos do array
let listaUl = document.createElement('ul');

let body = document.getElementsByTagName('body');

body[0].appendChild(listaUl);

let listaNoBody = document.getElementsByTagName('ul');

console.log(listaNoBody[0]);

for(let i = 0; i < lista.length; i++) {

    let liFor = document.createElement('li');

    let textoLi = document.createTextNode(lista[i]);

    liFor.appendChild(textoLi);

    listaNoBody[0].appendChild(liFor)
}