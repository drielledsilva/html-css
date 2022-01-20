var idade = 17;
var nome = "João";

if(nome == "João" || idade > 14) {
    console.log("Pode entrar na aula de violino");
} else {
    console.log("Não pode entrar");
}

if(nome == "Pedro" && (30 > 20 || 10 == 10)) {
    console.log("Testando");
} else {
    console.log("Não entrou");
}

if((nome == "Pedro" || 30 > 20) && 10 == 10) {
    console.log("Testando");
} else {
    console.log("Não entrou");
}

/* A ordem dos operadores lógicos interfere no resultado pois a operação começa da esquerda para a direita. Se && for o primeiro operador lógico as duas validações precisam ser true, caso seja || basta que uma das duas seja true para que seja true */ 