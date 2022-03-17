const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { employees } = data;
  const { species } = data;
  const animalThatIsResponsibleFor = employees.find((person) => person.id === id)
    .responsibleFor[0];
  return Object.values(species.find((subject) => subject.id === animalThatIsResponsibleFor)
    .residents.sort((a, b) => b.age - a.age)[0]);
}

module.exports = getOldestFromFirstSpecies;
