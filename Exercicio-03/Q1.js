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
