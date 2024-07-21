// Destructuring Array
// const perkenalan = ["Halo", "nama", "saya", "Erlangga"];
// const [salam, i, j, nama] = perkenalan;
// skip item
// const [salam, , , nama] = perkenalan;

// swap items
// let a = 1;
// let b = 2;
// [a, b] = [b, a];

// return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();

// Rest parameters
// const [a, ...values] = [1, 2, 3, 4, 6];

// Destrucsturing Object
// const mhs = {
//   nama: "Erlangga",
//   umur: 21,
// };

// const { nama, umur } = mhs;

// Assignment tanpa deklarasi objek
// ({ nama, umur } = { nama: "erlangga", umur: 21 });

// Assign ke variable baru
// const mhs = {
//   nama: "Erlangga",
//   umur: 21,
// };

// const { nama: n, umur: u } = mhs;

// Memberikan nilai default
// const mhs = {
//   nama: "Erlangga",
//   umur: 21,
// };

// const { nama, umur, email = "email@default.com" } = mhs;

// memberi nilai default dan assign ke variable baru
// const mhs = {
//   nama: "Erlangga",
//   umur: 21,
// };

// const { nama: n, umur: u, email: e = "email@default.com" } = mhs;

// Rest parameter
// const mhs = {
//   nama: "Erlangga",
//   umur: 21,
// };

// const { nama, ...values } = mhs;

// mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const mhs = {
//   id: 123,
//   nama: "Erlangga",
//   umur: 21,
// };

// function getMhs({ id }) {
//   return id;
// }
// console.log(getMhs(mhs));

// LATIHAN
// function penjumlahanPerkalian(a, b) {
// function kalkulasi(a, b) {
//   return [a + b, a * b, a * b, a / b];
// }

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

// const [tambah, kurang, kali, bagi = "tidak ada"] = kalkulasi(2, 3);
// console.log(bagi);

// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { bagi, tambah, kali, kurang } = kalkulasi(2, 3);
// console.log(kurang);

// Destructuring function arguments
const mhs1 = {
  nama: "erlangga",
  umur: "21",
  email: "erlangga@gmail.com",
  nilai: {
    tugas: 50,
    uts: 80,
    uas: 20,
  },
};

// function cetakMhs(mhs) {
//   return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun. `;
// }

// console.log(cetakMhs(mhs1));

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}. `;
}
console.log(cetakMhs(mhs1));
