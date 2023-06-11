// les function par declaration

// syntax

//une fonction est une expression lorsque elle est assigne a une variable

// const salut = function () {
//   console.log("salut a toi");
// };

// salut();

// les fonction qui permettent de retourner des valeure
// function surface() {
//   let longueur = 15;
//   let largeur = 10;
//   return longueur * largeur;
// }

// const resultat = surface();
// console.log(`la surface du rectangle est: ${resultat} m2 `);

//les paramettres des fonctions
// function salutation(p1, p2) {
//   console.log("Salut, ", p1, "et", p2);
// }

// salutation("kamdjou", "omar");

// function surfaceRectangle(L, l) {
//   let result = L * l;
//   return result;
// }

// console.log(` la surface du rectangle est: ${surfaceRectangle(2, 3)}`);

// console.log(` la surface du rectangle est: ${surfaceRectangle(6, 8)}`);

// console.log(` la surface du rectangle est: ${surfaceRectangle(2, 1)}`);

// fonction flechees

//non flechee
const salut = function () {};

// flechee

// const surfacerect = (p1, p2) => {
//   valeure = p1 * p2;
//   return valeure;
// };

// console.log(surfacerect(4, 5));

const salutation = (name, prenom) => console.log("salut", name, prenom);

salutation("duplex", "kamjou");

const surfacerext = (L, l) => {
  let resultat = L * l;
  return resultat;
};

console.log(surfacerext(5, 3));
