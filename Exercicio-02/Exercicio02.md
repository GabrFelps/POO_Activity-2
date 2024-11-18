# Exercício 02
### 1. Qual a diferença entre tipagem dinâmica e tipagem estática?
- No uso da tipagem dinâmica, não é necessário informar previamente o tipo do objeto à ser utilizado. Na execução do programa, é feito um processo indutivo pelo computador, que determina o tipo do objeto. Por outro lado, na tipagem dinâmica, o objeto é tipado antes da execução do programa, o que garante um tempo de execução menor, devido à não necessidade de tipar o código em sua execução.

### 2. Qual o principal problema do uso de tipagem dinâmica?
- Como o tipo das variáveis não são checados pelo compilador antes da execução, o programa fica mais sucétivel a erros em tempo de execução, EX: uma variável que o programador esperava que fosse um número, mas é considerada uma string e causa erro em operações matemáticas. Além do tempo de execução que pode ser reduzido.

### 3. Pesquise um exemplo na internet em que a tipagem dinâmica pode ser problemático.
(gerado no chat gpt)
```typescript
interface Produto {
    quantidade: any;  
    preco_unitario: any;  
}

function calcularPrecoTotal(produtos: Produto[]): number {
    let total = 0;

    for (const produto of produtos) {
        const quantidade = produto.quantidade;
        const precoUnitario = produto.preco_unitario;
        
        total += quantidade * precoUnitario; 
    }

    return total;
}

const produtos: Produto[] = [
    { quantidade: 2, preco_unitario: 10.0 },
    { quantidade: 3, preco_unitario: 15.0 },
    { quantidade: "cinco", preco_unitario: 20.0 }
];

console.log(calcularPrecoTotal(produtos));
```
no caso do programa em typescript acima, se alguma entrada como "cinco" ao invés de 5 fosse inserida, o programa apresentaria _NaN_, pela tipagem dinâmica. Se no código fosse implementada a tipagem estática, o erro seria identificado pelo compilador antes mesmo da execução do código

### 4. Pesquise e exemplifique com um exemplo porque dizemos que a linguagem C, mesmo tendo tipagem estática, possui tipagem fraca.
C é uma linguagem que possui tipagem estática, mas um dos motivos de ser considerada uma tipagem fraca é por alguns motivos, mas um deles é a conversão implicita de tipos (casting automático). 

```c
#include <stdio.h>

int main(){
  int a = 5;
  float b = 2.5;
  float resultado = a + b;

  printf("%f", resultado);
}
```
Nesse caso, na linha 3 do código, vai ser forçada a conversão de _5_ que é um _int_ em um _float_. Em outras linguagens com tipagem forte, essa operação resultaria em um erro, mas o valor da variável resultado vai ser _7.500000_

### 5. Poderíamos dizer que a tipagem do TypeScript é fraca por uma variável do tipo
number aceitar tanto inteiros como ponto flutuante?
Não, Apesar de aceitar valores de dois tipos em _number_, Typescript é uma linguagem que não permite que tipos incompatíveis sejam atribuidos de maneira arbitrária, diferente de C. 
```typescript
let num: number = 42;
num = "hello"; // erro: Type 'string' is not assignable to type 'number'.

```

### 6. Reescreva o exemplo abaixo, mantendo a quebra de linhas usando template strings e os valores Ely, 120.56 e TypeScript venham de variáveis declaradas separadamente e “interpoladas” na string:

[CÓDIGO](https://github.com/GabrFelps/POO_Activity-2/blob/main/Exercicio-02/fav_language.ts)

### 7. Pesquise e configure o seu arquivo de configuração do TypeScript com as opções abaixo. Faça testes com as mudanças e perceba a diferença após a configuração.
a. Alterar o local em que os arquivos *.js são gerados para a pasta build;

b. allowUnreachableCode com valor true;
https://www.typescriptlang.org/pt/tsconfig#allowUnreachableCode

c. noImplicitAny com valor true;
https://www.typescriptlang.org/pt/tsconfig#noImplicitAny

d. target com o valor ES3. Além disso, utilize a classe do exercício anterior e veja como ela é transpilada para JS;

e. strictNullChecks para true e crie um exemplo que mostre a restrição;

f. Configure um projeto seu para que seja possível realizar depuração alterando o atributo sourceMap.

[veja o TSCONFIG](https://github.com/GabrFelps/POO_Activity-2/blob/main/Exercicio-02/tsconfig.json)


