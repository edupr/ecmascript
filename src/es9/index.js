const obj = {
    name: 'Oscar',
    age: 32,
    country: 'MX'
};

let { name, ...all } = obj;
console.log(name, all); // Oscar { country: 'MX', age: 30 }

const obj2 = {
    name: 'Oscar',
    age: 32,
};

const obj1 = {
    ...obj2,
    country: 'MX',
};

console.log(obj); // { name: 'Oscar', age: 32, country: 'MX' }


const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test error'))
    });
}   // end of promise

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finally'))


    const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
    const match = regexData.exec('2018-04-20');
    const year = match[1];
    const month = match[2];
    const day = match[3];

    console.log(year, month, day); // 2018 04 20