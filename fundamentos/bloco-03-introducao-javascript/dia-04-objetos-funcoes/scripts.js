let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim', 
}

//console.log('Bem-vinda, ' + info.personagem);
//console.log(info);

/* Exercício 3
for(let key in info){
  console.log(key);
}*/

/*Exercício 4
for(let key in info){
  console.log(info[key]);
}*/

console.log(info.personagem + ' e ' + info2.personagem);
console.log(info.origem + ' e ' + info2.origem);
console.log(info.nota + ' e ' + info2.nota);

if(info.recorrente == 'Sim' && info2.recorrente == 'Sim'){
  console.log('Ambos recorrentes');
}else if(info.recorrente == 'Sim'){
  console.log(info.personagem + ' é recorrente');
}else if(info2.recorrente == 'Sim'){
  console.log(info2.personagem + ' é recorrente');
}else{
  console.log('Nenhum dos 2 é recorrente')
}



/*let car = {
  type: 'Fiat',
  model: 'Bravo',
  color: 'Prata',
}

let player = {
  fistName: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
}

console.log('A jogadora ' + player.fistName + ' ' + player.lastName  + ' tem ' + player.age + ' anos de idade.')

console.log('A jogadora ' + player.fistName + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.')

console.log('A jogaora possui ' + player.medals.golden + ' medalhas e ouro e ' + player.medals.silver + ' mealhas de prata.')*/
