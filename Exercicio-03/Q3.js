// 3. Crie uma função que retorne os números de um array passados por parâmetro separados por traço (-) 
// no formato string. Para isso, use o método forEach dos arrays.
var ListaDeNumeros = /** @class */ (function () {
    function ListaDeNumeros(numeros) {
        this.numeros = numeros;
    }
    ListaDeNumeros.prototype.formatar = function () {
        var resultado = '';
        this.numeros.forEach(function (numero, index) {
            if (index > 0) {
                resultado += '-';
            }
            resultado += numero;
        });
        return resultado;
    };
    return ListaDeNumeros;
}());
var numeros = new ListaDeNumeros([1, 2, 3, 4, 5]);
console.log(numeros.formatar());
