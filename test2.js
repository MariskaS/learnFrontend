// function c() {
// var i=1, j=1;
// do
//     i++
//     while (j<=100)
//     console.log("sdfdf")
//     console.log(i)
//     return true;
// }
//
// c()
function start() {
    var x, y;
    x = 9;
    y = second(x); //90
    x = ender(y);
    console.log(x)
    return true;
}

function second(y) {
    var x, z;
    x = 10;
    z = y * x;
    return z;
}

function ender(z) {
    var x, y;
    x = 5;
    y = second(z + x);
    return y;
}

start()
