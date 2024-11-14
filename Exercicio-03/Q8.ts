class NumbersMapDuce {
  arrayNumbs: number[];
  constructor(arrayNumbs: number[]) {
    this.arrayNumbs = arrayNumbs;
  }
  filtrar(): number[] {
    return this.arrayNumbs.map((numero) => numero * 2);
  }
  reduzir(): number {
    return this.arrayNumbs.reduce((acumulador, numero) => acumulador + numero, 0);
  }
}

const array1 = new NumbersMapDuce([1, 2, 3, 4, 5, 6, 7]);
console.log(array1.filtrar());

const array2 = new NumbersMapDuce([1, 2, 3]);
console.log(array2.reduzir());