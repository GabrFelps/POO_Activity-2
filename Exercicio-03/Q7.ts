class FiltroNumeros {
  array: number[];

  constructor(array: number[]) {
    this.array = array;
  }

  filtrarPares(): number[] {
    return this.array.filter((numero) => numero % 2 === 0);
  }
}

const numeros1 = new FiltroNumeros([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
const pares = numeros1.filtrarPares();

console.log(pares); 