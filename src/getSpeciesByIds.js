const data = require('../data/zoo_data');

function getSpeciesByIds(ids) {
  if (!ids) return [];

  const individual = 
  data.species.filter((animal) => (animal.id === ids ? animal : []));
  console.log(individual);
}
// getSpeciesByIds('baa6e93a-f295-44e7-8f70-2bcdc6f6948d');

module.exports = getSpeciesByIds;
