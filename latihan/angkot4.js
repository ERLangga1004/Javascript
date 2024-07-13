var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;
var angkotLembur = [5, 8, 10];

for (var i = noAngkot; i <= jmlAngkot; i++){
    if (i <= angkotBeroperasi && i !== 5){
        console.log('Angkot No.' + i + ' beroperasi dengan baik.');
    }else if(angkotLembur.includes(i)){
        console.log('Angkot No.' + i + ' sedang lembur.');
    }else{
        console.log('Angkot No.' + i + ' sedang tidak beroperasi.')
    }
}