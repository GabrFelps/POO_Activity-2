var Pessoa = /** @class */ (function () {
    function Pessoa(nome, pronome) {
        if (pronome === void 0) { pronome = "Sr"; }
        this.nome = nome;
        this.pronome = pronome;
    }
    Pessoa.prototype.saudacao = function () {
        return "".concat(this.pronome, ". ").concat(this.nome);
    };
    return Pessoa;
}());
var pessoa1 = new Pessoa("Sávia", "Sra");
console.log(pessoa1.saudacao());
var pessoa2 = new Pessoa("Ely", "Me");
console.log(pessoa2.saudacao());
