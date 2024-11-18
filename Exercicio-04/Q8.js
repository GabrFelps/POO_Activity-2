var Equipamento = /** @class */ (function () {
    function Equipamento() {
        this.ligado = false;
    }
    Equipamento.prototype.liga = function () {
        if (!this.ligado)
            this.ligado = true;
    };
    Equipamento.prototype.desliga = function () {
        if (this.ligado)
            this.ligado = false;
    };
    Equipamento.prototype.inverte = function () {
        this.ligado = !this.ligado;
    };
    Equipamento.prototype.estaLigado = function () {
        return this.ligado;
    };
    return Equipamento;
}());
var equipamento = new Equipamento();
console.log(equipamento.estaLigado());
equipamento.liga();
console.log(equipamento.estaLigado());
equipamento.liga();
console.log(equipamento.estaLigado());
equipamento.desliga();
console.log(equipamento.estaLigado());
equipamento.inverte();
console.log(equipamento.estaLigado());
equipamento.inverte();
console.log(equipamento.estaLigado());
