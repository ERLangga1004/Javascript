// Spread Operator
// memecah iterables menjadi single element

// const mhs = ["Erlangga", "Miku", "Nino"];
// console.log(...mhs); // Erlangga Miku Nino
// console.log(...mhs[1]); // M i k u

// untuk menggabungkan 2 array
// const mhs = ["Erlangga", "Miku", "Nino"];
// const dosen = ["Itsuki", "Ichika", "Yotsuba"];
// const orang = [...mhs, ...dosen];
// const orang2 = [...mhs, "Komi", ...dosen];
// // const orang = mhs.concat(dosen);
// console.log(orang2);
// console.log(orang);

// Copy array
// const mhs = ["Erlangga", "Miku", "Nino"];
// const mhs1 = [...mhs];
// mhs1[0] = "Ichika";
// console.log(mhs); // array asal tidak berubah
// console.log(mhs1);

// const liMhs = document.querySelectorAll("li");
// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;

// REST PARAMETER
// function muFunc() {
// return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
// return myArgs;
// return arguments;
// return [...arguments];
// }

// console.log(muFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//   let total = 0;
//   for (const a of angka) {
//     total += a;
//   }
//   return total;
//   return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

// arrat distructuring
// const kelompok1 = ["Erlangga", "Miku", "Komi", "Nino", "Itsuki"];

// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua, wakil);
// console.log(anggota);

// object destructuring
// const team = {
//   pm: "Erlangga",
//   frontEnd1: "Miku",
//   frontEnd2: "Komi",
//   backEnd1: "Arisu",
//   backEnd2: "Itsuki",
//   ux: "Yotsuba",
//   devOps: "Nino",
// };

// const { pm, ...myTeam } = team;
// console.log(myTeam);
// console.log(pm);

// filtering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filterBy("number", 1, 2, "Erlangga", false, 10, true, "Miku"));
