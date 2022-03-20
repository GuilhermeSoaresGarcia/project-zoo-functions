const data = require('../data/zoo_data');

const { species, employees } = data;

function noParametersResult() {
  return employees.map((person) => (
    {
      id: person.id,
      fullName: `${person.firstName} ${person.lastName}`,
      species: species.filter((individual) => person.responsibleFor
        .includes(individual.id))
        .map((animalName) => animalName.name),
      locations: species.filter((individual) => person.responsibleFor
        .includes(individual.id))
        .map((animalLocation) => animalLocation.location),
    }
  ));
}

function getEmployeesCoverage(info) {
  if (!info) return noParametersResult();
  if (info Object.values(info)[0])
  const employee = employees.find((person) => person.id === Object.values(info)[0]
    || person.firstName === Object.values(info)[0]
    || person.lastName === Object.values(info)[0]);
  const animal = species.filter((individual) => employee.responsibleFor.includes(individual.id));

  const result = {
    id: `${employee.id}`,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: animal.map((animalName) => animalName.name),
    locations: animal.map((animalLocation) => animalLocation.location),
  };

  return result;
}

// console.log(getEmployeesCoverage());
console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmployeesCoverage({ name: 'Guilherme' }));

module.exports = getEmployeesCoverage;
