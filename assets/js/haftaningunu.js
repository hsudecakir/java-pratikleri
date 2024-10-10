// Haftanın Günü

let gun = prompt('7\'ye kadar bir sayı yazıp haftanın hangi gününe karşılık geleceğini öğrenin.')

switch(gun) {
  case '1':
    alert('Pazartesi');
    break;
  case '2':
    alert('Salı');
    break;
  case '3':
    alert('Çarşamba');
    break;
  case '4':
    alert('Perşembe');
    break;
  case '5':
    alert('Cuma');
    break;
  case '6':
    alert('Cumartesi');
    break;
  case '7':
    alert('Pazar');
    break;
  default:
    alert('Geçersiz gün.');
}