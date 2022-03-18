const data = require('../data/zoo_data');

// const pessoas = [
//   { name: 'João', age: 5 },
//   { name: 'Pedro', age: 5 },
//   { name: 'Guilherme', age: 5 },
//   { name: 'Maria', age: 18 },
//   { name: 'Angelica', age: 18 },
//   { name: 'Antonio', age: 50 },
// ];

function countEntrants(entrants) {
  if (entrants.length > 0) {
    const totalDeVisitantes = { adult: 0, child: 0, senior: 0 };
    totalDeVisitantes.adult = entrants.filter((person) => person.age > 17
    && person.age < 50).length;
    totalDeVisitantes.child = entrants.filter((person) => person.age < 18).length;
    totalDeVisitantes.senior = entrants.filter((person) => person.age > 49).length;
    return totalDeVisitantes;
  }
}

function calculateEntry(entrants) {
  // Checar se o objeto está vazio. Fonte: https://flaviocopes.com/how-to-check-object-empty/
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
}

// countEntrants(pessoas);
// console.log(calculateEntry(pessoas));

module.exports = { calculateEntry, countEntrants };
