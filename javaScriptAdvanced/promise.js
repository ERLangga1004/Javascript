// $.ajax({
//   url: "https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=The+Shawshank+Redemption",
//   success: (movie) => console.log(movie),
// });

// fetch("")
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// promise
// Object yg mempresentasikan berhasil tidaknya sebuah event yg assynchronous di masa mendatang
// janji (terpenuhi)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi(then / catch)

// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("Janji telah ditepati");
//   } else {
//     reject("Ingkar janji");
//   }
// });

// janji1.then((response) => console.log("OK! : " + response)).catch((response) => console.log("NOT OK! :" + response));

// contoh2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati setelah beberapa waktu!");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("Tidak ditepati setelah beberapa waktu!");
//     }, 2000);
//   }
// });

// console.log("mulai");
// console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log("selesai menunggu!"))
//   .then((response) => console.log("OK! : " + response))
//   .catch((response) => console.log("NOT OK! : " + response));
// console.log("selesai");

// Promise.all()

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "filem",
        sutradara: "ern",
        pemeran: "komi, miku",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Bogor",
        temp: 21,
        kondisi: "Cerah Dingin",
      },
    ]);
  }, 500);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

Promise.all([film, cuaca])
  // .then((response) => console.log(response));
  .then((response) => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });
