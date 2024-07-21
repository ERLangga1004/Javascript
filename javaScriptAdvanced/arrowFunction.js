// Function Expression
// const tampilNama = function (nama) {
//   return `Halo, ${nama}`;
// };

// console.log(tampilNama("Erlangga"));

// Arrow Function
// const tampilNama = (nama) => {
//   return `Halo, ${nama}`;
// };
// console.log(tampilNama("Erlangga"));

// parameter lebih dari 1
// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}.`;
// };
// console.log(tampilNama("Erlangga", "Malam"));

// jika hanya 1 parameter / implisit return
// const tampilNama = (nama) => `Halo, ${nama}`;
// console.log(tampilNama("Erlangga"));

// tanpa parameter
// const tampilNama = () => `Hello World`;
// console.log(tampilNama("Miku"));

// Tanpa arrow function
// let mahasiswa = ["Erlangga", "Miku", "Nino", "ichika"];

// let jmlHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });

// console.log(jmlHuruf);

// Dengan arrow function
// let jmlHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jmlHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => ({ nama, jmlHuruf: nama.length }));
// console.table(jumlahHuruf);

// Concept this pada arrow function
// Construction function
// const Mahasiswa = function () {
//   this.nama = "Erlangga";
//   this.umur = 21;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };

// const erlangga = new Mahasiswa();

// object literal
// const mhs1 = {
//   name: "Erlangga",
//   umur: 21,
//   sayHello() {
//     console.log(this);
//   },
// };

// const Mahasiswa = function () {
//   this.nama = "Erlangga";
//   this.umur = 21;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };

// const erlangga = new Mahasiswa();

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
