// Net Kar Hesaplama

let fiyat = prompt('Ürünün satış bedelini giriniz.');
let maliyet = prompt('Ürünün maliyetini giriniz.');

alert('Ürünün KDV dahil toplam fiyatı ' + (Number(fiyat) + (Number(fiyat) * 0.2)) + 'TL\'dir.' + ' Üründen elde edeceğiniz net kar ' + (Number(fiyat) - (Number(maliyet) + (Number(fiyat) * 0.25))) + 'TL\'dir.');