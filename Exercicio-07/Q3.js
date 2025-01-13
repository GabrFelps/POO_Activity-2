var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CalculadoraCientifica = /** @class */ (function (_super) {
    __extends(CalculadoraCientifica, _super);
    function CalculadoraCientifica(v1, v2) {
        return _super.call(this, v1, v2) || this;
    }
    CalculadoraCientifica.prototype.potencia = function () {
        return Math.pow(this.valor1, this.valor2);
    };
    return CalculadoraCientifica;
}(Calculadora));
var calcCientifica = new CalculadoraCientifica(3, 2);
console.log('Resultado da soma:', calcCientifica.somar());
console.log('Resultado da potência:', calcCientifica.potencia());
