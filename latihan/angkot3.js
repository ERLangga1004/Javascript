var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for (var i = noAngkot ; i <= jmlAngkot; i++){
    if (i <= angkotBeroperasi){
        console.log('Angkot No.' + i + ' beroperasi dengan baik.');
    }else{
        console.log('Angkot No.' + i + ' sedang tidak beroperasi.');
    }
}