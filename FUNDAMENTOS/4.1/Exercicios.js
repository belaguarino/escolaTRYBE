/* Exercício 1 

Faça cinco programas, um para cada operação aritmética básica. 
Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)

 */

let a;
let b;

// SOMA
function somar(a, b) {
  const soma = a + b;

  console.log(`Segue o resultado da SOMA: ${soma}`);
  return somar;
}
somar(2, 9);

//SUBTRAÇÃO
function subtrair(a, b) {
  const subtracao = a - b;

  console.log(`Segue o resultado da SUBTRACAO: ${subtracao}`);
  return subtrair;
}
subtrair(7, 1);

//MULTIPLICAÇÃO
function multip(a, b) {
  const mult = a * b;

  console.log(`Segue o resultado da MULTIPLICACAO: ${mult}`);
  return multip;
}
multip(7, 1);

//DIVISAO
function divisao(a, b) {
  const divi = a / b;

  console.log(`Segue o resultado da DIVISAO: ${divi}`);
  return divisao;
}
divisao(10, 2);

//MODULO
function modulo(a, b) {
  const mod = a % b;

  console.log(`Segue o resultado do MODULO: ${mod}`);
  return modulo;
}
modulo(12, 5);

/* Exercício 2

Faça um programa que retorne o maior de dois números. 
Defina no começo do programa duas variáveis com os valores que serão comparados.

*/

function comparar(a, b) {
  if (a > b) {
    console.log(`${a} é maior que ${b}`);
  } else if (b > a) {
    console.log(`${b} é maior que ${a}`);
  } else {
    console.log(`${a} é igual a ${b}`);
  }
  return;
}

comparar(23, 11);

/* Exercício 2

Faça um programa que retorne o maior de dois números. 
Defina no começo do programa duas variáveis com os valores que serão comparados.

*/

// Desafio 4
function concatName(arrayPhrase) {
  let ultima = arrayPhrase[arrayPhrase.length - 1];
  let primeira = arrayPhrase[0];
  let newArray = [];
  newArray.push(ultima, primeira);
  return newArray.join(", ");
}
console.log(concatName(["Lucas", "Cassiano", "Ferraz", "Paolillo"]));

//Desafio 5
function footballPoints(wins, ties) {
  let resultadoJogo = wins * 3 + ties;
  return resultadoJogo;
}

console.log(footballPoints(3, 1));

//Desafio 6

function highestCount(todosNumeros) {
  //Fazer um for loop em cada número e validar se é o maior
  let oMaior = todosNumeros[0];
  for (let i = 0; i < todosNumeros.length; i++) {
    if (todosNumeros[i] > oMaior) {
      oMaior = arrayOfNumbers[index];
    }
  }

  return oMaior;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

//DESAFIO 7

function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return "cat2";
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

console.log(catAndMouse(3, 9, 2));

//DESAFIO 8

function fizzBuzz(arrayNumeros) {
  let arrayNova = [];
  for (let v = 0; v < arrayNumeros.length; v++) {
    if (arrayNumeros[v] % 3 === 0 && arrayNumeros[v] % 5 !== 0) {
      arrayNova.push("fizz");
    } else if (arrayNumeros[v] % 5 === 0 && arrayNumeros[v] % 3 !== 0) {
      arrayNova.push("buzz");
    } else if (arrayNumeros[v] % 3 === 0 && arrayNumeros[v] % 5 === 0) {
      arrayNova.push("fizzBuzz");
    } else {
      arrayNova.push("bug!");
    }
  }
  return arrayNova;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

//DESAFIO 9

function encode(phrase) {
  return phrase
    .replace(/a/g, 1)
    .replace(/e/g, 2)
    .replace(/i/g, 3)
    .replace(/o/g, 4)
    .replace(/u/g, 5);
}

function decode(phrase) {
  return phrase
    .replace(/1/g, "a")
    .replace(/2/g, "e")
    .replace(/3/g, "i")
    .replace(/4/g, "o")
    .replace(/5/g, "u");
}

// Desafio 10
function techList(array, name) {
  //retornar VAZIO para array vazia
  if (array.length === 0) {
    return "Vazio!";
  }
  //ordenar alfabeticamente
  let listaOrdenada = array.sort();
  let resultadoFinal = [];

  for (let e = 0; e < array.length; e++) {
    resultadoFinal[e] = {
      tech: listaOrdenada[e],
      name: name,
    };
  }

  return resultadoFinal;
}

console.log(techList([], "Lucas"));

// Desafio 11
function generatePhoneNumber(numeros) {
  if (numeros.length !== 11) {
    return "Array com tamanho incorreto";
  }

  for (let n = 0; n < numeros.length; n++) {
    if (numeros[n] < 0 || numeros[n] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

  for (let f1 = 0; f1 < numeros.length; f1++) {
    let contar = 0;
    for (let f2 = 0; f2 < numeros.length; f2++) {
      if (numeros[f1] === numeros[f2]) {
        contar++;
      }
    }
    if (contar >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  return `(${numeros.slice(0, 2).join("")}) ${numeros
    .slice(2, 7)
    .join("")}-${numeros.slice(7).join("")}`;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 14, 4, 4, 8, 9, 0, 1]));

function triangleCheck(lineA, lineB, lineC) {
  let existir = false;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    existir = true;
  } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    existir = true;
  } else if (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
    existir = true;
  }
  return existir;
}
console.log(triangleCheck(10, 12, 5));

// Desafio 13
function hydrate(bar) {
  let arrayBar = bar.match(/\d+/g); //busca na string BAR qualquer digito de 0 a 9 repetido 1 ou mais vezes, de forma global!
  let agua = 0;
  for (let b = 0; b < arrayBar.length; b++) {
    let copos = Number(arrayBar[b]);
    agua += copos;
  }
  if (agua === 1) {
    return "1 copo de água";
  }
  return `${agua} copos de água`;
}
console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));
