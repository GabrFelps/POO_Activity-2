// 2. Crie uma função que receba como parâmetros um nome e um pronome de tratamento opcional. 
// Caso esse último não seja fornecido, deve ser considerado o valor “Sr”. Ao final, imprima uma saudação semelhante a “Sra. Sávia”.
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
