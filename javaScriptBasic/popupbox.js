// Alert
// let a = "Halo";
// let b = "Saya, Muhammad Erlangga Gunawan";
// [a, b].forEach(alert);

// Prompt
// var nama = prompt("Masukan Nama Anda: ");
// alert("Selamat Datang " + nama);

// Confirm
// var tes = confirm("Kamu Yakin??");
// if (tes === true){
//     alert("User menekan OK");
// } else{
//     alert("User menekan CANCEL")
// }

alert('selamat datang..');
var lagi = true;

while(lagi){
    var nama = prompt('masukan nama:');
    alert('halo ' + nama);

    lagi = confirm('coba lagi');
}

alert('terima kasih');