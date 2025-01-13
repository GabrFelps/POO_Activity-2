class Calculadora1 {
  protected valor1: number;
  protected valor2: number;

  constructor(v1: number, v2: number) {
      this.valor1 = v1;
      this.valor2 = v2;
  }

  somar(): number {
      return this.valor1 + this.valor2;
  }
}

const calc = new Calculadora1(7, 4);
console.log('Resultado da soma:', calc.somar());
