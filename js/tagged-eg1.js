// With the template provided, write a tempalte tag that will validate an SQL statement:
// 1. Only SELECT or UPDATE statements are used
// 2. The password table is off limits
// 3. If there is no order by clause, add it and order by asc
// 4. When done, return the reconstructed query, or a note any errors



let city = `Chicago` //data we got from somewhere else (api or database)
let userId = 3; //data we got from somewhere else (api or database)
let command = `SELECT *`;
let table = `users`;
let whereClauses = [
 `uid = ${2+1}`,
 `OR city = ${city}`
];
orderBy = "name desc";
 
// Your code to call the tag and log the return value here...
const query = checkQuery`${command} FROM ${table} WHERE ${whereClauses}  ORDER BY ${orderBy}`;

console.log('final query:')
console.log(query);
 
// Spread syntax is a more common and easy here if you are comfortable with it
function checkQuery(string, command, table, whereClauses, order) {
//Your validation code here...
//string will be [ '', ' FROM ', ' WHERE ', '  ORDER BY ', '' ]
console.log(string);
if(command.indexOf('SELECT')===-1 && command.indexOf('UPDATE')===-1){
    return `You have only previlage to select and update`;
}else if(table !== 'users'){
    return `You don't have access to given table`;
}else if(!order){
    order = "name asc"
}
const finalQuery = `${string[0]}${command}${string[1]}${table}${string[2]}${whereClauses.join(' ')}${string[3]}${order}`;
 return finalQuery; 
}