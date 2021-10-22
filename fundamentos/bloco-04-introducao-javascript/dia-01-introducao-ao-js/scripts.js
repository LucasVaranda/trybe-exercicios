const a = 15;
const b = 10;
const c = 5;
let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

if(a > b && a > c){
  console.log(a);
}else if(b > a && b > c){
  console.log(b);
}else if(c > a && c > b){
  console.log(c);
}

if(a >= 0){
  console.log("Positivo")
}else{
  console.log("Negativo")
}


/*const currentHour = 10;
let message = "";

if(currentHour >= 22){
  message = 'Não deveríamos comer nada, é hora de dormir';
}else if(currentHour >= 18 && currentHour < 22){
  message = 'Rango da noite, vamos jantar :D';
}else if(currentHour >= 14 && currentHour < 18){
  message = 'Vamos fazer um bolo pro café da tarde?';
}else if(currentHour >= 11 && currentHour <= 14){
  message = 'Hora do almoço!!!';
}else if(currentHour >= 4 && currentHour <= 11){
  message = 'Hmm, cheiro de café recém passado';
}

console.log(message);*/