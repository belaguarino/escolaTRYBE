
// ALUNA IZABELA GUARINO TRYBE TURMA 14B
// PROJETO PLAYGROUND


// Desafio 1
function compareTrue(firstValue, secondValue) {
  if (secondValue === true && firstValue === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let calculateArea = (base * height) / 2;
  return calculateArea;
}

// Desafio 3
function splitSentence(phrase) {
  {
    let result = phrase.split(" ");
    console.log(result);
  
    return result;
  }

  
// Desafio 4

function concatName(arrayPhrase) {
  let ultima = arrayPhrase[arrayPhrase.length - 1];
  let primeira = arrayPhrase[0];
  let newArray = [];
  newArray.push(ultima, primeira);
  return newArray.join(", ");
}


// Desafio 5
function footballPoints(wins, ties) {
  let resultadoJogo = wins * 3 + ties;
  return resultadoJogo;
}

// Desafio 6
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


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return "cat2";
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  }
}



// Desafio 8

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


// Desafio 9
function encode(phrase) {
    // usar o g para substituir GLOBALMENTE!!!

  return phrase
    .replace(/a/g, 1)
    .replace(/e/g, 2)
    .replace(/i/g, 3)
    .replace(/o/g, 4)
    .replace(/u/g, 5);
}

function decode(phrase) {
    // usar o g para substituir GLOBALMENTE!!!

  return phrase
    .replace(/1/g, "a")
    .replace(/2/g, "e")
    .replace(/3/g, "i")
    .replace(/4/g, "o")
    .replace(/5/g, "u");
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
