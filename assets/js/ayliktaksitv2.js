// Aylık Taksit Hesaplama v2

let kredi = prompt('Çektiğiniz kredi miktarını giriniz.');
let taksit = prompt('Kaç taksit istediğinizi giriniz.');
let faiz = prompt('Toplam faiz oranını giriniz.');

alert('Aylık ödemeniz gereken tutar ' + ((Number(kredi) + (Number(kredi) * (Number(faiz) / 100))) / Number(taksit)) + 'TL\'dir.');