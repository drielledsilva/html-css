// declarar as variáveis de escopo global no topo do código

var x = 1;

var y = 3;

console.log(x, y);

function teste() {

    var z = 0;

    console.log(z);
}

teste();

function testando() {

    var z = 5;

    console.log(z);
}

testando();

if(true) {

    var p = 2;
}

console.log(p);