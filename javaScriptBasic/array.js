//  Manipulasi Array

// menampilkan array
var arr = ['nama1', 'nama2', 'nama3'];

for( var i = 0; i < arr.length; i++){
    console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
}

// Method
// join : merubah isi array menjadi string
console.log(arr.join('-'));

// push & pop : menambah/mendorong masuk dan menghapus/memecahkan keluar akhir array
arr.push('nama4', 'nama5');
console.log(arr.join('-'));
arr.pop();
console.log(arr.join('-'));

// unshift & shift : menambah/mengeser ke dalam dan menghapus/ menggeser ke luar awal array
arr.unshift('nama-1','nama0');
console.log(arr.join('-'));
arr.shift();
console.log(arr.join('-'));

// slice & splice : mengiris/mengambil dan menyambung/menambal array
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
arr.splice(2, 0, 'namaBaru', 'namaBaru2');
console.log(arr.join('-'));
// slice(awal, akhir)
var arrBaru = arr.slice(1,3);
console.log(arrBaru.join('-'));

// forEach &&  map : melakukan looping pada array
var angka = [1,2,3,4,5,6,7,8];
// for( var i = 0; i < angka.length; i++){
//     console.log(angka[i]);
// }
angka.forEach(function(e){
    console.log(e);
});

arr.forEach(function(e, i){
    console.log(('Mahasiswa ke-' + (i+1) + ' adalah: ' + e));
});

// map : mengembalikan array
angka_2 = angka.map(function(e){
    return e * 2;
})

console.log(angka_2.join('-'));

// Sort
var angka_3 = [1,3,2,4,6,7,9,8,10];
angka_3.sort(function(a,b){
    return a-b;
});
console.log(angka_3.join('-'))

// filter dan find : mencari elemen
// filter : mengembalikan banyak nilai
// find : mengembalikan 1 nilai
var angka_4 = angka_3.filter(function(e){
    return e > 5;
});
console.log(angka_4.join('-'))

var angka_4 = angka_3.find(function(e){
    return e > 5;
});
console.log(angka_4)