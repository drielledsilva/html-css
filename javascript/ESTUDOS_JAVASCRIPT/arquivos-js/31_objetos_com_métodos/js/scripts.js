let pessoa = {
    nome: 'Ariadne',
    idade: 22,

    // adicionando método dentro do objeto
    falar: function() {
        console.log('Olá, tudo bem?');
    },

    // método com retorno (return)
    soma: function(a, b) {
        return a + b;
    }
};

console.log(pessoa.nome);

pessoa.falar();

var soma = pessoa.soma(2, 2);

console.log(soma);