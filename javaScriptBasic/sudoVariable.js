function tambah(){
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }

    return hasil;
}

var test = tambah(1,2,3,4,5);
console.log(test);