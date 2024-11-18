class Triangulo {
  ladoA: number;
  ladoB: number;
  ladoC: number;

  constructor(ladoA: number, ladoB: number, ladoC: number) {
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
  }

  formaTriangulo(): boolean {
    return (
      Math.abs(this.ladoB - this.ladoC) < this.ladoA &&
      this.ladoA < this.ladoB + this.ladoC
    );
  }

  ehIsoceles(): boolean {
    if (!this.formaTriangulo()) return false;
    return (
      this.ladoA === this.ladoB ||
      this.ladoA === this.ladoC ||
      this.ladoB === this.ladoC
    );
  }

  ehEquilatero(): boolean {
    if (!this.formaTriangulo()) return false;
    return this.ladoA === this.ladoB && this.ladoB === this.ladoC;
  }

  ehEscaleno(): boolean {
    if (!this.formaTriangulo()) return false;
    return this.ladoA !== this.ladoB && this.ladoA !== this.ladoC && this.ladoB !== this.ladoC;
  }
}

const t1 = new Triangulo(3, 3, 3);
console.log(t1.ehEquilatero());
console.log(t1.ehIsoceles());
console.log(t1.ehEscaleno());

const t2 = new Triangulo(3, 4, 5);
console.log(t2.ehEquilatero());
console.log(t2.ehIsoceles());
console.log(t2.ehEscaleno());

const t3 = new Triangulo(3, 3, 5);
console.log(t3.ehEquilatero());
console.log(t3.ehIsoceles());
console.log(t3.ehEscaleno());