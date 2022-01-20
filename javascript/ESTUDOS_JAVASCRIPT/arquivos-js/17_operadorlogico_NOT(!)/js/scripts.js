/* O operador lógico ! é conhecido também como NOT
Este operador muda o valor que a expressão retornou, se recebeu true vira false, se recebeu false vira true */

if(!false) {
    console.log("Passou");
}

var nome = "Matheus";

if(!(nome == "João")) {
    console.log("Ok");
}