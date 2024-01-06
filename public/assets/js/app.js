
let tabAges = [12, 13, 13];



let sommeAges = 0;
for (let i = 0; i < tabAges.length; i++) {
    sommeAges += tabAges[i];
}


let moyenneAge = sommeAges / tabAges.length;


console.log("La moyenne d'âge est : " + moyenneAge);