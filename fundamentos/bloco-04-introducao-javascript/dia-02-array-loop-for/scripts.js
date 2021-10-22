let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let medArit = 0;
let maiorNumero = 0;
let contImpar = 0;
let valorMin = numbers[0];

/* Exercício 1
for(let i = 0 ; i < numbers.length ; i++){
  console.log(numbers[i]);
} */

/* Exercício 2
for(let i = 0 ; i < numbers.length ; i++){
  soma = soma + numbers[i];
}

console.log(soma); */

/* Exercício 3 e 4
for(let i = 0 ; i < numbers.length ; i++){
  soma = soma + numbers[i];
  medArit = soma / numbers.length;
}

if(medArit > 20){
  console.log('Valor maior que 20');
}else{
  console.log('Valor menor que 20');
}

console.log(medArit);*/

/* Exercício 5
for(let i = 0 ; i < numbers.length ; i++){
  if(numbers[i] > maiorNumero){
    maiorNumero = numbers[i];
  }
}

console.log(maiorNumero); */

/* Exercício 6
for(let i = 0 ; i < numbers.length ; i++){
  if(numbers[i] % 2 !==0){
    contImpar++;
  }
}

if(contImpar === 0){
  console.log('nenhum valor ímpar encontrado')
}else{
  console.log(contImpar);
} */

/* Exercício 7
for(let i = 0 ; i < numbers.length ; i++){
  if(numbers[i] < valorMin){
    valorMin = numbers[i];
  }
}
console.log(valorMin); */

/* Exercício 8 e 9
for(let i = 0 ; i < 25 ; i++){
  console.log(numbers[i] /2);
} */

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let nomes of names){
  console.log(nomes);
}

