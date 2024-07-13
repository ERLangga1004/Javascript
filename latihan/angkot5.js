var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang){
    // jika angkot kosong
    if( penumpang.length == 0){
        // tambah penumpang
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari funtion
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for( var i = 0; i < penumpang.length; i++){
            // jika ada kursi kosong
            if( penumpang[i] == undefined){
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari funtion
                return penumpang;
            }
            // jika sudah ada nama yang sama
            else if( penumpang[i] == namaPenumpang){
                // tampilkan pesan kelahannya
                console.log(namaPenumpang + ' Sudah ada di dalam angkot!');
                // kembalikan isi array dan keluar dari funtion
                return penumpang;
            }
                
            // jika seluruh kursi terisi
            else if( i == penumpang.length - 1){
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan nilai array dan keluar dari funtion
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang){
    if( penumpang.length == 0){
        console.log('Angkot kosong!'); 
        return penumpang;

    } else {
        for( var i = 0; i < penumpang.length; i++){
            if( penumpang[i] == namaPenumpang){
                penumpang[i] = undefined;
                return penumpang;

            } else{
                console.log(namaPenumpang + ' tidak ada di dalam angkot!');
                return penumpang;
            }
        }
    }
}