// var nama = 'Erlangga';
// console.log(nama)

// creation phase pada global context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global Object
// this = window

// execution phase

// console.log(sayHello());

// var nama = 'Erlangga';
// var umur = 33;

// function sayHello() {
//     return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function membuat local execution context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// var nama = 'Erlangga Gunawan';
// var username = '@erlangga';

// function cetakURL(username){
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL(username));



// function a() {
//     console.log(`ini a`);

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');
//         }

//         c();
//     }

//     b();
// }

// a();


function satu() {
    var nama = 'Erlangga'; 
    console.log(nama); //Erlangga
}

function dua() {
    console.log(nama); //erik
}

console.log(nama); //undefined
var nama = 'erik';
satu();
dua('dodi');
console.log(nama); //erik
// Output: undefined
        // Erlangga
        // erik
        // erik