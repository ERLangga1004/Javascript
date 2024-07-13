var tanya = true;
while (tanya){
    // Menangkap pilihan player
    var p = prompt('pilih: GUNTING, KERTAS, BATU');

    // Menangkap pilihan komputer
    // Membangkitkan bilangan random
    var comp = Math.random();

    if( comp < 0.34){
        comp = 'GUNTING';
    } else if( comp >= 0.34 && comp < 0.67){
        comp = 'KERTAS';
    } else{
        comp = 'BATU';
    }

    // Menentukan rules
    var hasil = '';
    if (p == comp){
        hasil = 'SERI';
    } else if (p == 'GUNTING'){
        // if (comp == 'KERTAS'){
        //     hasil = 'MEGUNTING
        //     hasil = 'KALAH';
        // }
        hasil = (comp == 'KERTAS') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'KERTAS'){
        hasil = (comp == 'BATU') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'BATU'){
        hasil = (comp == 'GUNTING') ? 'MENANG!' : 'KALAH!';
    } else{
        hasil = 'Memasukan pilihan yang SALAH';
    }

    // Tampilkan hasil
    alert('Kamu memilih: ' + p + ' dan Komputer memilih: ' + comp + '\nmaka hasilnya: Kamu ' + hasil);

    tanya = confirm('lagi?');
}

alert('Terima kasih, sudah bermain!')

