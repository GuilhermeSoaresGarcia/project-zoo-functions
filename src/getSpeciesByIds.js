const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  return species.filter((animals) => ids.some((receivedId) => animals.id === receivedId));
}

module.exports = getSpeciesByIds;
