const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  return species.filter((animalPopularName) => animalPopularName.name === animal)
    .every((individual, index) => individual.residents[index].age > age);
}

module.exports = getAnimalsOlderThan;
