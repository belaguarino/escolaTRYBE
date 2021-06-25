// Desafio 10
function techList(array, name) {
  //retornar VAZIO para array vazia
  if (array.length === 0) {
    return 'Vazio!';
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

// Desafio 11
function generatePhoneNumber(numeros) {
  if (numeros.length !== 11) {
    return 'Array com tamanho incorreto';
  }

  for (let n = 0; n < numeros.length; n++) {
    if (numeros[n] < 0 || numeros[n] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
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
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${numeros.slice(0, 2).join('')}) ${numeros
    .slice(2, 7)
    .join('')}-${numeros.slice(7).join('')}`;
}

// Desafio 12
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

// Desafio 13
function hydrate(bar) {
  let arrayBar = bar.match(/\d+/g); //busca na string BAR qualquer digito de 0 a 9 repetido 1 ou mais vezes, de forma global!
  let agua = 0;
  for (let b = 0; b < arrayBar.length; b++) {
    let copos = Number(arrayBar[b]); //transforma em numero
    agua += copos;
  }
  if (agua === 1) {
    return '1 copo de água';
  }
  return `${agua} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
