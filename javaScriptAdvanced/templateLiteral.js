// Template Literal / Template String

// const nama = "Erlangga";
// const umur = 21;
// console.log(`Halo, nama saya ${nama}, dan saya ${umur}`);

//embedded expression
// console.log(`${1 + 1}`);
// console.log(`${alert("halo!")}`);

// const x = 11;
// console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// HTML Fragment
// const mhs = {
//   nama: "Erlangga",
//   umur: 21,
//   nim: "I.2210161",
//   email: "gds@gmail.com",
// };

// const el = `<div className="mhs">
//     <h2>${mhs.nama}</h2>
//     <span className="nim">${mhs.nim}</span>
// </div>`;

// document.body.innerHTML = el;

// LATIHAN
// Looping

// const mhs = [
//   {
//     nama: "Erlangga",
//     email: "erlangga@gmail.com",
//   },
//   {
//     nama: "Miku",
//     email: "miku@gmail.com",
//   },
//   {
//     nama: "Nino",
//     email: "nino@gmail.com",
//   },
// ];

// const el = `<div className="mhs">
//     ${mhs
//       .map(
//         (m) => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//         </ul>`
//       )
//       .join("")}
// </div>`;

// Conditional
// ternary

// const lagu = {
//   judul: "Kau Adalah",
//   penyanyi: "Isyana Sarasvati",
//   feat: "Rayi Putra",
// };

// const el = `<div className="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
//     </ul>
// </div>`;

// nested

// const mhs = {
//   nama: "Erlangga",
//   semester: 5,
//   mataKuliah: ["Struktur Data", "Matematika", "Al-jabar Linear", "Machine Learning"],
// };

// function cetakMataKuliah(mataKuliah) {
//   return `
//     <ol>
//         ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
//     </ol>
//     `;
// }

// const el = `<div className="mhs">
// <h2>${mhs.nama}</h2>
// <span className="semester">Semester: ${mhs.semester}</span>
// <h4>Mata Kuliah</h4>
// ${cetakMataKuliah(mhs.mataKuliah)}
// </div>`;

// document.body.innerHTML = el;

// TAGGED TAMPLATE

// const nama = "Erlangga";
// const umur = 21;

// function coba(strings, ...values) {
//   // let result = "";
//   // strings.forEach((str, i) => {
//   //   result += `${str}${values[i] || ""}`;
//   // });
//   // return result;

//   // dengan reduce
//   return strings.reduce((result, str, i) => `${result}${str}${values[i] || ""}`, "");
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// highlight
const nama = "Erlangga";
const umur = 21;
const nim = "I.2210161";

function highlight(strings, ...values) {
  // dengan reduce
  return strings.reduce((result, str, i) => `${result}${str}<span class="hl"> ${values[i] || ""}</span>`, "");
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun dan nim saya ${nim}`;
document.body.innerHTML = str;
