for(var i = 10; i > 0; i--) {

    console.log(i);

    if(i === 5) {
        break;
    }
}

console.log("Deu o break");

var x = 10;

while(x < 100) {

    x += 10;

    if(x === 60 || x === 90) {
        console.log("CONTINUE");
        continue;

    }

    console.log("Testando continue " + x);
}

/* O BREAK sai do loop e executa o próximo código na sequência enquanto o CONTINUE só pula uma execução, ele vai para a próxima*/