// Vize ve Final Notu ile Ortalama

let vize = prompt('Vize notunuzu giriniz');
let final =prompt('Final notunuzu giriniz.');

if((Number(vize) * 0.4) + (Number(final) * 0.6) > 50){
  alert('Geçtiniz. ' + 'Ortalamanız: ' + ((Number(vize) * 0.4) + (Number(final) * 0.6)));
} else if(((Number(vize) * 0.4) + (Number(final) * 0.6)) < 40){
  alert('Kaldınız. ' + 'Ortalamanız: ' + ((Number(vize) * 0.4) + (Number(final) * 0.6)));
} else if(40 < ((Number(vize) * 0.4) + (Number(final) * 0.6)) <= 50) {
  alert('Şartlı geçtiniz. ' + 'Ortalamanız: ' + ((Number(vize) * 0.4) + (Number(final) * 0.6)));
} 