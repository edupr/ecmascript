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


let name2 = 'Oscar';
let age2 = 30;

// es5
obj = { name2: name2, age2: age2 };
// es6
obj2 = { name2, age2 };
console.log(obj2);
console.log(obj);

// Arrow Functions
const names = [
    { name: 'Oscar', age: 30 },
    { name: 'Julian', age: 27 },
];

// es5
let listOfNames = names.map(function(item) {
    console.log(item.name);
});

// es6 Arrow Functions
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    console.log(name, age, country);
};

const listOfNames4 = name => {
    console.log(name);
};

const square = num => num * num;

// Promises
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Ups!');
        }
    });
};

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('This always executes'))
    .catch(error => console.log(error));