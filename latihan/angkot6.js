// membuat Object Angkot

function Angkot( namaSopir, daerahTrayek, daftarPenumpang, saldoKas ){
    this.namaSopir = namaSopir;
    this.daerahTrayek = daerahTrayek;
    this.daftarPenumpang = daftarPenumpang;
    this.saldoKas = saldoKas;

    this.penumpangNaik = function(namaPenumpang){
        this.daftarPenumpang.push(namaPenumpang);
        return this.daftarPenumpang;
    }

    this.penumpangTurun = function(namaPenumpang, biayaBayar){
        if( this.daftarPenumpang.length === 0){
            alert('angkot masih kosong!');
            return false;
        }

        for( var i = 0; i < this.daftarPenumpang.length; i++){
            if( this.daftarPenumpang[i] == namaPenumpang){
                this.daftarPenumpang[i] = undefined;
                this.saldoKas += biayaBayar;
                return this.daftarPenumpang;
            }
        }
    }
}

var angkot1 = new Angkot( 'Erlangga', ['Ciawi', 'Cicurug'], [], 0 );
var angkot2 = new Angkot( 'Rival', ['Cisarua', 'Ciburial'], [], 0 );
var angkot3 = new Angkot( 'Ryandra', ['parung', 'Babakan Madang'], [], 0 );

// // penggunaan
// angkot1.penumpangTurun('Budi', 5000); // Alert: 'angkot masih kosong!'

// angkot1.penumpangNaik('Budi');
// angkot1.penumpangNaik('Ani');
// console.log(angkot1.daftarPenumpang); // Output: ['Budi', 'Ani']

// angkot1.penumpangTurun('Ani', 5000);
// console.log(angkot1.daftarPenumpang); // Output: ['Budi]
// console.log(angkot1.saldoKas); // Output: 5000

