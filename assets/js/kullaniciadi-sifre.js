// Kullanıcı Adı ve Şifre Kontrolü

let username = prompt('Kullanıcı adını giriniz');
let password = prompt('Şifrenizi giriniz.');

if(username === 'admin' && password === '1234') {
  alert('Giriş başarılı');
} else {
  alert('Kullanıcı adı veya şifre hatalı');
}