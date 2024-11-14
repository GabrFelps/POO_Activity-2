// ### 8. Crie um exemplo usando a função map para dobrar os elementos de um array e
// reduce para totalizar a soma dos elementos do array.
var NumbersMapDuce = /** @class */ (function () {
    function NumbersMapDuce(arrayNumbs) {
        this.arrayNumbs = arrayNumbs;
    }
    NumbersMapDuce.prototype.filtrar = function () {
        return this.arrayNumbs.map(function (numero) { return numero * 2; });
    };
    NumbersMapDuce.prototype.reduzir = function () {
        return this.arrayNumbs.reduce(function (acumulador, numero) { return acumulador + numero; }, 0);
    };
    return NumbersMapDuce;
}());
var array1 = new NumbersMapDuce([1, 2, 3, 4, 5, 6, 7]);
console.log(array1.filtrar());
var array2 = new NumbersMapDuce([1, 2, 3]);
console.log(array2.reduzir());
