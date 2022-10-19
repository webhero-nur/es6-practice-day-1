// #1
let age = 50;
age = 55;

const dateOfBirth = 'Sep 15, 2001';

const nameInfo = {
    firstName: 'John',
    middleName: 'Adron',
    lastName: 'Smith'
}

// #2
const templateString = `Full name of ${nameInfo.firstName} is ${nameInfo.firstName} ${nameInfo.middleName} ${nameInfo.lastName}.
He was born on ${dateOfBirth}.
Now he is ${age} years old.`;
// console.log(templateString);

// #3
// #3.1
const devideByFive = num => num / 5;
// console.log(devideByFive(age));
// #3.2
const addTwoAndMultiply = (num1, num2) => (num1 + 2) * (num2 + 2);
// console.log(addTwoAndMultiply(3, 8));
// #3.3
const multiplyThree = (num1, num2, num3) => num1 * num2 * num3;
// console.log(multiplyThree(5, 10, 2));
// #3.4
const multiLineAddTwoAndMultiply = (num1, num2) => {
    const n1 = num1 + 2;
    const n2 = num2 + 2;
    const result = n1 * n2;
    return result;
}
// console.log(multiLineAddTwoAndMultiply(8, 3));

// #4
/*
javascript function declatration vs arrow function
*/

// #4.5
/*
var, let, const difference in javascript
*/

// #5
const numbers = [6, 3, 5, 4, 1, 9, 8, 4, 1, 7];
const fiveTimes = numbers.map(n => n * 5);
// console.log(fiveTimes);

// #6
const oddNumbers = numbers.filter(num => num % 2 !== 0);
// console.log(oddNumbers);

// #7
const products = [
    { id: 1, item: 'laptop', price: 58000 },
    { id: 2, item: 'phone', price: 22000 },
    { id: 3, item: 'watch', price: 5000 }
];
const objectFind = products.find(product => product.price === 5000);
// console.log(objectFind);

// #7.5
/*
What is the purpose of map, forEach, filter, find on array in javascript. Write down a summary of them.
*/

// #8
const { firstName, lastName } = nameInfo;
// console.log(firstName, lastName);

// #9
const [a, b, third, ...rest] = numbers;
// console.log(third);

// #10
function addThree(value1, value2, value3 = 7) {
    return value1 + value2 + value3;
}
// console.log(addThree(10, 5));

// #11
const developerInfo = {
    name: {
        firstName: 'MD Nure',
        lastName: 'Alom',
    },
    versity: {
        name: 'Daffodil International University',
        location: {
            street: 'Daffodil Smart City, Khagan',
            area: 'Dattapara, Savar, Dhaka',
        },
    },
    result: {
        CGPA: 3.71,
        Semester: ['Summer-19', 'Fall-19', 'Spring-20', 'Fall-20', 'Spring-21', 'Summer-21', 'Fall-21', 'Spring-22', 'Summer-22'],
        SGPA: [3.19, 3.48, 3.89, 3.83, 3.59, 3.85, 3.96, 3.83, 3.88],
    }
}

// const developerCGPA = developerInfo?.result?.CGPA;
const developerCGPA = developerInfo?.result?.CGPA;
const developerLastSGPA = developerInfo?.result?.SGPA[developerInfo.result.SGPA.length - 1];
console.log(developerCGPA);
console.log(developerLastSGPA);