class ListaDeNumeros {
  numeros: number[];

  constructor(numeros: number[]) {
    this.numeros = numeros;
  }

  formatar(): string {
    let resultado = '';
    
    this.numeros.forEach((numero, index) => {
      if (index > 0) {
        resultado += '-'; 
      }
      resultado += numero;
    });

    return resultado;
  }
}

const numeros = new ListaDeNumeros([1, 2, 3, 4, 5]);
console.log(numeros.formatar()); 

