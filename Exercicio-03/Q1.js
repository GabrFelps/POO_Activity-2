// 1. Crie uma função que recebe como parâmetro um número e retorna true se o número for par e false se for ímpar.
var Paridade = /** @class */ (function () {
    function Paridade() {
    }
    Paridade.verificarParidade = function (numero) {
        return numero % 2 === 0;
    };
    return Paridade;
}());
var numero = 11;
var resultado = Paridade.verificarParidade(numero);
console.log(resultado);
