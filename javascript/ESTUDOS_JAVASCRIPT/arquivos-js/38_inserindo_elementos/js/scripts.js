// criar elemento

var el = document.createElement("div");

el.classList = "div-criada";

// classList acessa e adiciona classes

console.log(el);

var container = document.querySelector("#container");

// inserindo elemento filho 
// colocando a variável el dentro do container

container.appendChild(el);

// insertBefore - insere antes

var el2 = document.createElement("div");

el2.classList = "div-before";

var el3 = document.querySelector("#container .div-criada");

console.log(el3);

container.insertBefore(el2, el3); // o que vai ser inserido e a referência