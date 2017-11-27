var a = 2;
a = a - 1;
a++;
var b = 8;
b += 2;
var c = a + b * b;
var d = a * b + b;
var e = a * (b + b);
var f = a * b / a;
var g = b / a * a;

console.log(a, b, c, d, e ,f ,g);

/* Avant de compiler : (ligne par ligne)
a = 2
a = 1
a = 2
b = 8
b = 10
c = 2 + 100 = 102
d = 20 + 10 = 30
e = 2 * 20 = 40
f = 20 / 2 = 10
g = 5 * 2 =10
*/