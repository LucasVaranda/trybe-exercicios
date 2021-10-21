/* Exercício 1
let paramUm = true;
let paramDois = true;

function compareTrue(paramUm, paramDois){
  if(paramUm == true && paramDois == true){
    return 'true';
  }else{
    return 'false';
  }
}

console.log(compareTrue(paramUm, paramDois)); */

/* Exercício 2
let base = 51;
let height = 1;

function calcArea(base, height){
  let area = (base * height) / 2;
  return area;
}

console.log(calcArea(base, height)); */

/* Exercício 3

let frase = 'vamo que vamo';

function splitSentence(frase){
  let myArray = frase.split(" ");
  return myArray;
}

console.log(splitSentence(frase)); */


/* Exercício 4
let stringsArr = ['captain', 'my', 'captain'];

function concatName(stringsArr){
  return stringsArr[stringsArr.length - 1] + ', ' + stringsArr[0];
}

console.log(concatName(stringsArr)); */


/* Exercício 5
let wins = 1;
let ties = 2;

function footballPoints(wins, ties){
  let pontos = (wins * 3) + ties;
  return pontos + ' pontos';
}

console.log(footballPoints(wins, ties)); */

/*
let arrayNum = [0, 4, 4, 4, 9, 2, 1];
let maxNum = 0;

function highestCount(arrayNum, maxNum){
  for(let i = 0; i < arrayNum.length; i += 1){
    maxNum = Math.max.apply(null, arrayNum);
  }
  return arrayNum.indexOf(maxNum);
}

console.log(highestCount(arrayNum, maxNum)); */


