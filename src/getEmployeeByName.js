const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  if (!employeeName) return {};
  return employees.find((person) => person.firstName === employeeName
  || person.lastName === employeeName);
}

// console.log(getEmployeeByName('Strauss'));

module.exports = getEmployeeByName;
