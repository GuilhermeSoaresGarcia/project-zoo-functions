const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (entrants.length > 0) {
    const allVisitors = { adult: 0, child: 0, senior: 0 };

    allVisitors.adult = entrants.filter((person) => person.age > 17
      && person.age < 50).length;
    allVisitors.child = entrants.filter((person) => person.age < 18).length;
    allVisitors.senior = entrants.filter((person) => person.age > 49).length;

    return allVisitors;
  }
}

function calculateEntry(entrants) {
  // Checar se o objeto está vazio. Fonte: https://flaviocopes.com/how-to-check-object-empty/
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  const quantityByAgeGroup = [countEntrants(entrants)];
  const { prices } = data;
  const arrayOfPrices = [prices];

  const adultTotal = Number(quantityByAgeGroup.map((person) => person.adult * arrayOfPrices
    .map((price) => price.adult)));
  const childTotal = Number(quantityByAgeGroup.map((person) => person.child * arrayOfPrices
    .map((price) => price.child)));
  const seniorTotal = Number(quantityByAgeGroup.map((person) => person.senior * arrayOfPrices
    .map((price) => price.senior)));

  const totalSum = adultTotal + childTotal + seniorTotal;

  return totalSum;
}

module.exports = { calculateEntry, countEntrants };
