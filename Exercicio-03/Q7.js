var FiltroNumeros = /** @class */ (function () {
    function FiltroNumeros(array) {
        this.array = array;
    }
    FiltroNumeros.prototype.filtrarPares = function () {
        return this.array.filter(function (numero) { return numero % 2 === 0; });
    };
    return FiltroNumeros;
}());
var numeros1 = new FiltroNumeros([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
var pares = numeros1.filtrarPares();
console.log(pares);
