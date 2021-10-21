/*function perimeter(base, altura){
  let resultPerimetro = (2 * base) + (2* altura);
  let resultArea = base * altura;

  let resultado = {
    area: resultArea,
    perimetro: resultPerimetro,
  }
  return resultado;
}*/
let arrayNum = [2, 3, 7, 8];

function parImp(arrayNum){
  let imp = 0;
  let par = 0;
  for(let i = 0; i < arrayNum.length; i++){
    if(arrayNum[i] % 2 == 0){
      par++;
    }else{
      imp++;
    }
  }
  return obj2 = {
    pares: par,
    impares: imp,
  }
  
}


console.log(parImp(arrayNum));