function init() {
    // let nama = 'erlangga';
    return function( nama ){ // Anonimous function
        console.log(nama);
    }
    
}
let panggilNama = init();
panggilNama('Erlangga');

// Factories
function ucapSalam(waktu) {
    return function(nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
    }
}

let selamatPagi = ucapSalam('Pagi');
let selamatSiang = ucapSalam('Siang');
let selamatMalam = ucapSalam('Malam');

console.log(selamatSiang('Erlangga'));

// Contoh lain dengan Immediately Invoked Funtion
let add = (function(){
    let counter = 0;
    return function(){
        return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());