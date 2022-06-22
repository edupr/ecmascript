let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

// Array.flat()
console.log(array.flat());
console.log(array.flat(2)); // [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]

let array2 = [1,2,3,4,5];

// flatMap()
console.log(array2.flatMap(value => [value, value * 2])); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

let hello = '          hello world';
console.log(hello);
console.log(hello.trimStart()); // hello world

let hello2 = 'hello world          ';
console.log(hello2);
console.log(hello2.trimEnd()); // hello world

let hello3 = 'hello world          ';
console.log(hello3);
console.log(hello3.trimEnd()); // hello world


// Try catch
try {
    throw new Error('error');
} catch (error) {
    console.log(error);
}

// fromEntries()
let entries = [["name", "oscar"], ["age", "30"]];
console.log(Object.fromEntries(entries)); // { name: "oscar", age: "30" }

// Descriptors
let mySymbol = `mySymbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description); // mySymbol