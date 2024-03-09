let employeeSet = new Set();
console.log(employeeSet)

const obj = {
	name: `Jane`,
	position: `CTO`,
	tenure: `12 years`
}

employeeSet.add(obj);
employeeSet.add(obj);
console.log(employeeSet);
console.log(employeeSet.size);

