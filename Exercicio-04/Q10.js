var Jogador = /** @class */ (function () {
    function Jogador(forca, nivel, pontos) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos = pontos;
    }
    Jogador.prototype.calcularAtaque = function () {
        return this.forca * this.nivel;
    };
    Jogador.prototype.atacar = function (atacado) {
        if (atacado.estaVivo()) {
            var dano = this.calcularAtaque();
            atacado.pontos -= dano;
        }
    };
    Jogador.prototype.estaVivo = function () {
        return this.pontos > 0;
    };
    Jogador.prototype.toString = function () {
        return "For\u00E7a: ".concat(this.forca, ", N\u00EDvel: ").concat(this.nivel, ", Pontos: ").concat(this.pontos);
    };
    return Jogador;
}());
var jogador1 = new Jogador(10, 5, 100);
var jogador2 = new Jogador(8, 6, 100);
console.log(jogador1.toString());
console.log(jogador2.toString());
jogador1.atacar(jogador2);
console.log(jogador1.toString());
console.log(jogador2.toString());
if (jogador1.pontos > jogador2.pontos) {
    console.log("Jogador 1 tem mais pontos");
}
else if (jogador2.pontos > jogador1.pontos) {
    console.log("Jogador 2 tem mais pontos");
}
else {
    console.log("Os jogadores têm a mesma quantidade de pontos");
}
