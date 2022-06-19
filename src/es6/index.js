function newFunction(name, age, country) {
  var name = name || 'oscar';
  var age = age || 23;
  var country = country || 'MX';
  console.log(name, age, country);
}

// es6
function newFunction2(name = 'oscar', age = 23, country = 'MX') {
  console.log(name, age, country);
}

newFunction2();
newFunction2('juan', 32, 'CO');

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n"
+ "Quisquam, quos, quisquam. Quisquam, quos, quisquam.";

// es6
let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Quisquam, quos, quisquam. Quisquam, quos, quisquam.`;
console.log(lorem);
console.log(lorem2);

// Destructuring
let person = {
    name: 'Oscar',
    age: 30,
    country: 'MX'
};

console.log(person.name, person.age, person.country);

let { name, age, country } = person;
console.log(name, age, country);

// Spread Operator
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Camila', 'Andrea'];

let education = ['David', ...team1, ...team2]; // spread operator
console.log(team1, team2);
console.log(education);

// let
{
    var globalVar = 'Global Var';
}

{
    let globalLet = 'Global Let';
}

console.log(globalVar);
console.log(globalLet);

const a = 'b';
a = 'c';
console.log(a);