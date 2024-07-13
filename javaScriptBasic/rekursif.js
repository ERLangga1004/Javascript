//  menampilkan angka 10-1
// Rekursif
function tampilAngka(n){
    if( n === 0) return; // base case
    console.log(n);
    return tampilAngka(n-1);
}

tampilAngka(10);

// Jika Menggunakan Looping
// function tampilAngka(n){
//     for( var i = n; i >= 1; i--){
//         console.log(i);
//     }
// }

// tampilAngka(10);

console.log('------------------');
// Rekursif faktorial
function faktorial(n){
    if( n === 0) return 1;
    return n * faktorial(n-1);
}

console.log(faktorial(5));

// // Dengan Looping
// function faktorial(n){
//     var hasil = 1;
//     for( var i = n; i >= 0; i--){
//         hasil *= i;
//     }
//     return hasil;
// }

// faktorial(5);