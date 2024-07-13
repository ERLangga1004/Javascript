// var angka = parseInt(prompt('Masukan angka: '))

// switch(angka){
//     case 1:
//         alert('Anda memasukan angka 1');
//         break;
//     case 2:
//         alert('Anda memasukan angka 2');
//         break;
//     default:
//         alert('Angka yang anda masukan salah!');
//         break;
// }

var item = prompt('Masukan nama makanan/minuman: \n (C/; gorengan, telur, susu, soda)');

switch(item){
    case 'telur':
    case 'susu':
        alert('makanan/minuman SEHAT!');
        break;
    case 'soda':
    case 'gorengan':      
        alert('makanan/minuman TIDAK SEHAT!');
        break;
    default:
        alert('anda memasukan makanan/minuman yang salah!');
        break;
}