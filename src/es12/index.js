// replaceAll
const string = "JavaScript es maravilloso, con JavaScript puedo crear muchas cosas";

const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript", "Python", 1);
console.log(replacedString2);

// Métodos privados (#)
class Message {
    #show(val) {
        console.log(val);
    };
    get #add() {
        return this.#show("Hola");
    }
};

const message = new Message();
message.show("Hola!");

// Promise any
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

// WeakRef (evita ser recogido por el garbage collector)
class anyClass {
    constructor(element) {
        this.ref = new WeakRef(element);
    }
    {...}
};


// Operadores logicos
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);
console.log(isTrue ??= isFalse);
