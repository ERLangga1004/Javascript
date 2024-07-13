function Mahasiswa( nama, energi ) {
    this.nama = nama;
    this.ernergi = energi;
}

Mahasiswa.prototype.makan = function ( porsi ){
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
}

Mahasiswa.prototype.main = function ( jam ){
    this.energi -= jam;
    return `Halo ${this.nama}, selamat bermain!`;
}

Mahasiswa.prototype.tidur = function ( jam ){
    this.energi += jam * 2;
    return `Halo ${this.nama}, selamat tidur!`;
}

let erlangga = new Mahasiswa( `Erlangga`, 10);

// versi class
class siswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, selamat tidur!`;
    }

    main(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, selamat tidur!`;
    }

    tidur(jam) {
        this.energi += jam * 2;
        return `Halo ${this.nama}, selamat tidur!`;
    }
}

let miku = new siswa( `Miku`, 20);