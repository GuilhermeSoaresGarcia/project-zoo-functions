const data = require('../data/zoo_data');

function isManager(id) {
  const { employees } = data;
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const { employees } = data;
  if (isManager(managerId)) {
    const managedEmployees = employees.filter((person) => person.managers.includes(managerId));
    const completeName = managedEmployees.map((names) =>
      `${names.firstName} ${names.lastName}`);
    return completeName;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
