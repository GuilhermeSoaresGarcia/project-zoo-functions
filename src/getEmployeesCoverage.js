const data = require('../data/zoo_data');

function getEmployeesCoverage(info) {
  const { species, employees } = data;
  const employee = employees.find((person) => person.id === Object.values(info)[0]
    || person.firstName === Object.values(info)[0]
    || person.lastName === Object.values(info)[0]);
  const animal = species.filter((individual) => employee.responsibleFor.includes(individual.id));

  const result = {
    id: `${employee.id}`,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: animal.map((teste) => teste.name),
    locations: animal.map((teste) => teste.location),
  };

  return result;
}

console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
