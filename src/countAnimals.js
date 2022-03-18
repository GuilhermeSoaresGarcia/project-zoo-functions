const data = require('../data/zoo_data');

function countAnimals(animal) {
  const { species } = data;
  if (!animal) {
    return species.reduce((acc, curr) => ({ ...acc, [curr.name]: curr.residents.length }), {});
  }
  if (Object.keys(animal).includes('sex')) {
    return species.find((individual) => Object.values(animal)
      .includes(individual.name)).residents.filter((gender) => (animal.sex === gender.sex)).length;
  }
  return species.find((individual) => Object.values(animal).includes(individual.name))
    .residents.length;
}

module.exports = countAnimals;
