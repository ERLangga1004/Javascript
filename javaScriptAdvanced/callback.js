// Callback
// Synchronous Callback
// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt("Masukan Nama : ");
//   callback(nama);
// }

// tampilkanPesan((nama) => alert(`Halo, ${nama}`));

// const mhs = [
//   {
//     nama: "Erlangga",
//     nim: "i.2210161",
//     email: "erlangga@gmail.com",
//     jurusan: "Ilmu Komputer",
//     idDosenWali: 1,
//   },
//   {
//     nama: "Komi",
//     nim: "i.2210162",
//     email: "komi@gmail.com",
//     jurusan: "Ilmu Komputer",
//     idDosenWali: 2,
//   },
//   {
//     nama: "Miku",
//     nim: "i.2210163",
//     email: "miku@gmail.com",
//     jurusan: "Ilmu Komputer",
//     idDosenWali: 3,
//   },
// ];

// console.log("mulai");
// mhs.forEach((m) => console.log(m.nama));
// console.log("selesai");

// Assynchronous  Callback
// JQuery
// console.log("mulai");
// $.ajax({
//   url: "/data/mahasiswa.json",
//   succes: (mhs) => {
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   error: (e) => {
//     console.log(e.responseText);
//   },
// });

// console.log("selesai");

// Latihan
$(".search-button").on("click", function () {
  $.ajax({
    url: "http://www.omdbapi.com/?i=tt3896198&apikey=1574ee88&s=" + $(".input-keyword").val(),
    success: (result) => {
      const movies = result.Search;
      let cards = "";
      movies.forEach((m) => {
        cards += showCard(m);
      });
      $(".movie-container").html(cards);

      // Tombol detail di klik
      $(".modal-detail-button").on("click", function () {
        $.ajax({
          url: `http://www.omdbapi.com/?i=${$(this).data("imdbid")}&apikey=1574ee88`,

          success: (m) => {
            console.log($(this).data("imdbid"));
            console.log("Data film:", m); // Memeriksa data yang diterima

            const movieDetail = showMovieDetail(m);

            $(".modal-body").html(movieDetail);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

function showCard(m) {
  return `<div class="col-md-4 col-sm-6 my-3">
          <div class="card">
            <img src="${m.Poster}" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">${m.Title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
              <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
            </div>
          </div>
        </div>`;
}

function showMovieDetail(m) {
  return `<div class="row">
              <div class="col-md-3">
                <img src="${m.Poster}" class="img-fluid" />
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item"><h4>${m.Title} ${m.Year}</h4></li>
                  <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                  <li class="list-group-item"><strong>Actors: </strong>${m.Actors}</li>
                  <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
                  <li class="list-group-item">
                    <strong>Plot : </strong><br />
                    ${m.Plot}
                  </li>
                </ul>
              </div>
            </div>`;
}
