// Cara membuat object pada javascript
// 1. Object literasi // tidak efektif untuk object uang banyak
// let mahasiswa = {
//     nama : 'Erlangga',
//     energi : 10,
//     makan : function(porsi){
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan!`)
//     }
// }

// let mahasiswa2 = { // Variable tidak boleh sama
//     nama : 'Miku',
//     energi : 8,
//     makan : function(porsi){
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan!`)
//     }
// }

// 2. Function Declaration 
// menambahkan object,create
// const methodMahasiswa = {
//     makan : function(porsi){
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan!`);
//     },
    
//     main : function(jam){
//         this.energi -= jam;
//         console.log(`halo ${this.nama}, selamat bermain`);
//     },
    
//     tidur : function(jam){
//         this.energi += jam * 2;
//         console.log(`halo ${this.nama}, selamat tidur`);
//     }
// };


// function Mahasiswa(nama, energi){
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let erlangga = Mahasiswa('Erlangga', 10);
// let miku = Mahasiswa('Miku', 15);

// // 3. Constructor Function
// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan!`);
//     }

//     this.main = function(jam){
//         this.energi -= jam;
//         console.log(`halo ${this.nama}, selamat bermain`);
//     }

// }

// let eruranga = new Mahasiswa('Erlangga', 10);
// let mikuuu = new Mahasiswa('Miku', 15);

// 4. Object.create
