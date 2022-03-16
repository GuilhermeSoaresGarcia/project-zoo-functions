const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  if (!employeeName) return {};
  return employees.find((person, index) => {
    if (person.firstName === employeeName || person.lastName === employeeName) {
      return employees[index];
    }
  });
}

console.log(getEmployeeByName('Strauss'));

module.exports = getEmployeeByName;