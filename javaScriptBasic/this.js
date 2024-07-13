// THIS
var a = 10;
console.log(this.a);

//  cara 1 - function declatation
function halo(){
    console.log(this);
    console.log('halo');
}

this.halo(); // mengembalikan object global

// cara 2 - object literal
var obj = {a : 10, nama : 'Miku'};
obj.halo = function(){
    console.log(this);
    console.log('halo');
}

obj.halo(); // mengembalikan objek yang bersangkutan

// cara 3 - constructor
function Halo(){
    console.log(this);
    console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo(); // this mengembalikan objek yang baru dibuat

