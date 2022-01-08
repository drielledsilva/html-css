var obj = {
    nome: "Matheus", // PROPRIEDADES
    idade: 29,
    profissao: "Programador",
    estaTrabalhando: true,
};

console.log(obj);

console.log(typeof obj);


// PARA ACESSAR ALGUMA DAS PROPRIEDADES DO OBJETO, É SÓ COLOCAR O NOME DO OBJETO,"." E O NOME DA PROPRIEDADE
console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log("O meu nome é " + obj.nome); // CONCATENAÇÃO DE OBJETOS POR PROPRIEDADE

obj.nome = "Pedro"; // MUDANDO O VALOR DE UMA PROPRIEDADE

console.log(obj.nome);
console.log(obj);

// CRIANDO PROPRIEDADES QUE NÃO EXISTEM DENTRO DO OBJETO

obj.graduacao = true;

console.log(obj);