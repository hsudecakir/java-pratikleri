// Saniyeyi Saate Çevirme

let toplam = prompt('Saat, dakika ve saniye cinsinden görmek için toplam saniyeyi giriniz.');
let saat = Math.floor(Number(toplam) / 3600);
let kalan = Number(toplam) % 3600;
let dakika = Math.floor(kalan / 60);
let saniye = kalan % 60;

alert(saat + ' saat ' + dakika + ' dakika ' + saniye + ' saniye');