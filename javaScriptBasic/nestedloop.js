var rows = 5;
var s = '';

for(var i = 0; i < rows; i++){
    for(var j = 0; j <= i; j++){
        s += '*';
    }

    s += '\n';
}

for(var i = 4; i > 0; i--){
    for(var j = 0; j < i; j++){
        s += '*';
    }
    s += '\n';
}

console.log(s);