var Calculadora = /** @class */ (function () {
    function Calculadora(v1, v2) {
        this.valor1 = v1;
        this.valor2 = v2;
    }
    Calculadora.prototype.somar = function () {
        return this.valor1 + this.valor2;
    };
    return Calculadora;
}());
var calc = new Calculadora(7, 4);
console.log('Resultado da soma:', calc.somar());
