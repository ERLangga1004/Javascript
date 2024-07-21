const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// filter: mencari angka >= 3

// dengan for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }

// console.log(newAngka);

// filter
// const newAngka = angka.filter((a) => a >= 3);

// console.log(newAngka);

// map
// kalikan semua angka dengan 2
// const newAngka = angka.map((a) => a * 2);
// console.log(angka);
// console.log(newAngka);

// reduce: melakukan sesuatu pada seluruh elemen array
// jumlahkan seluruh elemen pada array
// 0(nilai awal) + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(newAngka);

// Method Chaining
// cari angka > 5
// kalikan 3
// jumlahkan
// const hasil = angka
//   .filter((a) => a > 5) // 8, 9, 9
//   .map((a) => a * 3) // 24, 27, 27
//   .map((a) => a / 2) // 12, 13.5, 13.5
//   .reduce((acc, cur) => acc + cur); //39

// LATIHAN
// ambil semua elemen video
const videos = Array.from(document.querySelectorAll("[data-duration"));

// pilih hanya javascript lanjutan
let jsLanjut = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

  // ambil durasi masing2 video
  .map((item) => item.dataset.duration)
  // ubah durasi menjadi float, ubah menit menjadi detik
  .map((waktu) => {
    // 10:30 -> 10, 30 : split
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  // jumlahkan semua detik
  .reduce((total, detik) => total + detik);

// ubah format menjadi jam, menit dan detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di dom
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

// jumlah video
const jmlVideo = videos.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;
const pJmlVideo = document.querySelector(".jumlah-video");
pJmlVideo.textContent = `${jmlVideo} Video`;
console.log(jmlVideo);
