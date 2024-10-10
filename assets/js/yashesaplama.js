// Güncel Yaş Hesaplama

let day = prompt("Doğum gününüzü giriniz: ");
day = Number(day);
let month = prompt("Doğum ayınızı giriniz: ");
month = Number(month);
let year = prompt("Doğum yılınızı giriniz: ");
year = Number(year);

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1;
let currentDay = currentDate.getDate();

year = currentYear - year;
month = currentMonth - month;
day = currentDay - day;

if (month < 0) {
  year--;
  month += 12;
}

if (day < 0) {
  month--;
  day += new Date(currentYear, currentMonth, 0).getDate();
}

alert("Tam yaşınız: " + year + " yıl " + month + " ay " + day + " gün");
