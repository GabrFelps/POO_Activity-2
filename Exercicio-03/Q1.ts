class Paridade {
  static verificarParidade(numero: number): boolean {
    return numero % 2 === 0;
  }
}

const numero = 11;
const resultado = Paridade.verificarParidade(numero);
console.log(resultado);
