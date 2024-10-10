// Büyük Sayıyı Bulma

let number1 = prompt('Bir sayı giriniz');
let number2 = prompt('Bir sayı giriniz');
let number3 = prompt('Bir sayı giriniz');

if(Number(number1) > Number(number2) && Number(number1) > Number(number3)){
  alert('En büyük sayı: ' + number1);
} else if (Number(number2) > Number(number1) && Number(number2) > Number(number3)) {
  alert('En büyük sayı: ' + number2);
} else if(Number(number3) > Number(number1) && Number(number3) > Number(number1)){
  alert('En büyük sayı: ' + number3);
}