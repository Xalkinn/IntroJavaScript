//On rentre la valeur a convertir
var prix = Number(prompt("Entrez votre achat :"));

//On fais le calcul avec la TVA
var tva = (prix * 1.196);

console.log("Le prix TTC est de " + tva + " €");