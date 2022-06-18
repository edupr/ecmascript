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