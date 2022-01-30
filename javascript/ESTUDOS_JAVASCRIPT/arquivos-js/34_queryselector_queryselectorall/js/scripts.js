var itensClasse = document.getElementsByClassName('item');

console.log(itensClasse);

// querySelectorAll - # para id e . para class

// pegando os itens da segunda lista
var itensQuery = document.querySelectorAll('#lista2 li');

console.log(itensQuery);

// pegando os itens da primeira lista
var itensQuery2 = document.querySelectorAll('#lista .item');

console.log(itensQuery2);

//querySelector - (pega por elemento) serve para pegar um item só

var lista = document.querySelector('lista');

console.log(lista);

var span = document.querySelector('#paragrafo span');

console.log(span);