//Temperature en degres
var temperatureDegres = Number(prompt("Entrez votre température en degrès :"));

//temperature en Fahrenheir
var temperatureFahrenheit = (((temperatureDegres * 9) / 5) + 32);

//Affichage de la phrase
console.log(temperatureDegres +" °C = " + temperatureFahrenheit + " °F");