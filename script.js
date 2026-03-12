// Task 1.1: Create a function filterEvenNumbers that uses filter() to return only even numbers


// Task 1.2: Create a function doubleNumbers that uses map() to double each number


// Task 1.3: Create a function sumArray that uses reduce() to sum all numbers


// Task 2.1: Create a function createCounter that returns a function incrementing a counter


// Task 2.2: Create a function createMultiplier that returns a function multiplying by a given number


// Task 3.1: Create an async function fetchUserData that returns { id: 1, name: "John Doe" } after 100ms


// Task 3.2: Create an async function processData that waits 50ms then returns number * 2


// Task 4.1: Create a class Person with constructor(name, age) and method introduce()


// Task 4.2: Create a class Rectangle with constructor(width, height) and method getArea()


// Task 5.1: Create a function getFirstAndLast that uses destructuring to return {first, last}
// 1. Array Methods

// Task 1.1
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Task 1.2
function doubleNumbers(arr) {
    return arr.map(num => num * 2);
}

// Task 1.3
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}


// Task 2.1
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
// Task 2.2
function createMultiplier(multiplier) {
    return function(num) {
        return num * multiplier;
    };
}

// Task 3.1
async function fetchUserData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 1, name: "John Doe" });
        }, 100);
    });
}

// Task 3.2
async function processData(number) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(number * 2);
        }, 50);
    });
}

// Task 4.1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

// Task 4.2
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

// Task 5.1
function getFirstAndLast(arr) {
    const [first, ...rest] = arr;
    const last = rest.length ? rest[rest.length - 1] : first;
    return { first, last };
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        filterEvenNumbers,
        doubleNumbers,
        sumArray,
        createCounter,
        createMultiplier,
        fetchUserData,
        processData,
        Person,
        Rectangle,
        getFirstAndLast
    };
}
