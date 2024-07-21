// for..of
// ARRAY
// const mhs = ["erlangga", "miku", "nino"];

// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// mhs.forEach((m) => console.log(m));

// for (const m of mhs) {
//   console.log(m);
// }

// STRING
// const nama = "Erlangga";
// for (const n of nama) {
//   console.log(n);
// }

// const mhs = ["erlangga", "miku", "nino"];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

// nodelist
// const liNama = document.querySelectorAll(".nama");
// // liNama.forEach((n) => console.log(n.innerHTML));
// for (n of liNama) {
//   console.log(n.innerHTML);
// }

// arguments
// function jmlkanAngka() {
//   return arguments.reduce((a, i) => a + i); -> ERROR
//   let jumlah = 0;
//   arguments.forEach((a) => (jumlah += a)); ERROR

//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }

// console.log(jmlkanAngka(1, 2, 3, 4, 5));

// FOR IN
const mhs = {
  nama: "Erlangga",
  umur: 21,
  nim: "I.2210161",
};

for (m in mhs) {
  console.log(m); // mengambil indekx
  console.log(mhs[m]); // mengambil value
}
