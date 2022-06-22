// Dynamic import
const button = document.getElementById('btn');

button.addEventListener("click", async function () {
    const module = await import('./file.js');
    module.hello();
});

// BigInt
const aBigNumber = 9008768765836854678n;
const anotherBigNumber = BigInt(9008768765836854678);

console.log(aBigNumber);
console.log(anotherBigNumber);

// Promise
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled(promise1, promise2, promise3)
    .then(response => console.log(response));

// GlobalThis
// console.log(window);
console.log(globalThis);

// ?? (null operator)
const fooo = 'asd' ?? 'default string';
console.log(fooo);

// Optional Chaining
const user = {};
console.log(user?.profile?.email);

if (user?.profile?.email) {
    console.log('email');
} else {
    console.log('no email');
}