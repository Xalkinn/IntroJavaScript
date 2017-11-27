var nombre5 = 5;
var nombre3 = 3;

//Utilisation d'une autre variable
var nombreAide;

nombreAide = nombre5;   //nombreAide est égale a 5
nombre5 = nombre3;      //nombre5 = 3 mainteant
nombre3 = nombreAide;   //Nombre3 est égale a 5

console.log(nombre5); // Doit afficher 3
console.log(nombre3); // Doit afficher 5