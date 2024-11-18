class Jogador {
  forca: number;
  nivel: number;
  pontos: number;

  constructor(forca: number, nivel: number, pontos: number) {
    this.forca = forca;
    this.nivel = nivel;
    this.pontos = pontos;
  }

  calcularAtaque(): number {
    return this.forca * this.nivel;
  }

  atacar(atacado: Jogador): void {
    if (atacado.estaVivo()) {
      let dano = this.calcularAtaque();
      atacado.pontos -= dano;
    }
  }

  estaVivo(): boolean {
    return this.pontos > 0;
  }

  toString(): string {
    return `Força: ${this.forca}, Nível: ${this.nivel}, Pontos: ${this.pontos}`;
  }
}

const jogador1 = new Jogador(10, 5, 100);
const jogador2 = new Jogador(8, 6, 100);

console.log(jogador1.toString());
console.log(jogador2.toString());

jogador1.atacar(jogador2);

console.log(jogador1.toString());
console.log(jogador2.toString());

if (jogador1.pontos > jogador2.pontos) {
  console.log("Jogador 1 tem mais pontos");
} else if (jogador2.pontos > jogador1.pontos) {
  console.log("Jogador 2 tem mais pontos");
} else {
  console.log("Os jogadores têm a mesma quantidade de pontos");
}