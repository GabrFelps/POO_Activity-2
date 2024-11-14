class Exibidor {
  static exibir(...strings: string[]): void {
    strings.forEach((str) => {
      console.log(str);
    });
  }
}

Exibidor.exibir("a", "b"); 
Exibidor.exibir("a", "b", "c"); 
Exibidor.exibir("a", "b", "c", "d"); 
