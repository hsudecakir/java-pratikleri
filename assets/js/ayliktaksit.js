// Aylık Taksit Hesaplama

let kredi = prompt('Çektiğiniz kredi miktarını giriniz.');
let taksit = prompt('Kaç taksit istediğinizi giriniz.');

alert('Aylık ödemeniz gereken tutar ' + (Number(kredi) / Number(taksit)) + 'TL\'dir.');