// Object Literal
var mhs = {
    nama : "Erlangga",
    umur : 21,
    jurusan : 'Ilmu Komputer',
    ips : [4.00, 3.89, 4.00, 3.79]
};

// function declaration
function buatObjectMahasiswa(nama, nim, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Nofariza', 'I.2410001', 'nofa@gmail.com', 'Ilmu Komputer')

// Constructor
function Mahasiswa(nama, nim, email, jurusan){
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Erik', 'I.2511204', 'erik@gmail.com', 'Sains Komunikasi');

