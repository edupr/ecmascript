// es8
// Object entries
const data = {
    frontend: 'Oscar',
    backend: 'Julian',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// Object values
const data2 = {
    frontend: 'Oscar',
    backend: 'Julian',
    design: 'Ana',
}

const values = Object.values(data2);
console.log(values);
console.log(values.length);

// padding
const string = 'Hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' -----'));
console.log('food'.padEnd(12, '12345'));

// Trailing commas
const obj = {
    name: 'Oscar',
    age: 30,
    country: 'MX',
    job: 'Developer',   
};


// es8
// Async/Await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => {
                resolve('Hello World');
            }, 3000)    
            : reject(new Error('Test Error'));
    });
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();