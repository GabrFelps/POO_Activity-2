var Triangulo = /** @class */ (function () {
    function Triangulo(ladoA, ladoB, ladoC) {
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }
    Triangulo.prototype.formaTriangulo = function () {
        return (Math.abs(this.ladoB - this.ladoC) < this.ladoA &&
            this.ladoA < this.ladoB + this.ladoC);
    };
    Triangulo.prototype.ehIsoceles = function () {
        if (!this.formaTriangulo())
            return false;
        return (this.ladoA === this.ladoB ||
            this.ladoA === this.ladoC ||
            this.ladoB === this.ladoC);
    };
    Triangulo.prototype.ehEquilatero = function () {
        if (!this.formaTriangulo())
            return false;
        return this.ladoA === this.ladoB && this.ladoB === this.ladoC;
    };
    Triangulo.prototype.ehEscaleno = function () {
        if (!this.formaTriangulo())
            return false;
        return this.ladoA !== this.ladoB && this.ladoA !== this.ladoC && this.ladoB !== this.ladoC;
    };
    return Triangulo;
}());
var t1 = new Triangulo(3, 3, 3);
console.log(t1.ehEquilatero());
console.log(t1.ehIsoceles());
console.log(t1.ehEscaleno());
var t2 = new Triangulo(3, 4, 5);
console.log(t2.ehEquilatero());
console.log(t2.ehIsoceles());
console.log(t2.ehEscaleno());
var t3 = new Triangulo(3, 3, 5);
console.log(t3.ehEquilatero());
console.log(t3.ehIsoceles());
console.log(t3.ehEscaleno());
