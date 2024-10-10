// Basit İndirim Hesaplama
let price = prompt('Ürün fiyatını giriniz');
let sale = prompt('İndirim yüzdesini giriniz');
alert('Ürünün %' + sale + ' indirimli fiyatı ' + (Number(price) * ((100 - Number(sale)) / 100)) + 'tl\'dir.');
