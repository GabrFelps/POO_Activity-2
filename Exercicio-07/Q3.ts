class Calculadora {
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

class CalculadoraCientifica extends Calculadora {
  constructor(v1: number, v2: number) {
      super(v1, v2);
  }

  potencia(): number {
      return Math.pow(this.valor1, this.valor2);
  }
}

const calcCientifica = new CalculadoraCientifica(3, 2);
console.log('Resultado da soma:', calcCientifica.somar());
console.log('Resultado da potência:', calcCientifica.potencia());
