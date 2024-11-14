class Pessoa {
  nome: string;
  pronome: string;

  constructor(nome: string, pronome:string = "Sr"){
    this.nome = nome;
    this.pronome = pronome;
  }

  saudacao(): string {
    return `${this.pronome}. ${this.nome}`;
  } 
}

const pessoa1 = new Pessoa("Sávia", "Sra");
console.log(pessoa1.saudacao());

const pessoa2 = new Pessoa("Ely", "Me");
console.log(pessoa2.saudacao());