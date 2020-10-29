// const car = {
//     make: 'Tesla',
//     model: 'Model S',
//     color: 'red'
// }

// function start() {
//     return 'Outta here...';
// }

// function stop() {
//     return 'Push the brakes';
// }

// const car = {
//     make: 'Tesla',
//     model: 'Model S',
//     color: 'red',
//     start: function() {
//         return 'Outta here...';
//     },
//     stop: function() {
//         return 'Push the brakes';
//     }
// }

// console.log(car.start());

// const employee = {
//     name: 'Rome Bell',
//     role: 'SEI Lead Instructor',
//     salary: 100000
// };

// function salaryIncrease(salary) {
//     return salary * 1.1;
// }

// console.log(salaryIncrease(employee.salary));

// employee.salary = salaryIncrease(employee.salary);

// console.log(employee)

// function Human(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// const andrew = new Human('Andrew', 'Roosevelt')
// console.log(andrew);
// const peter = new Human('Peter', 'Griffen')
// console.log(peter);
// const alex = new Human('Alex', 'Li')
// console.log(alex);

// function Car (make, model, color) {
//     this.make = make;
//     this.model = model;
//     this.color = color;
// }

// const modelX = new Car('tesla', 'modelx', 'black');
// console.log(modelX);
// const lamb = new Car('lamborghini', 'urus', 'black');
// console.log(modelX);
// const corolla = new Car('toyota', 'corolla', 'silver');
// console.log(corolla);

// function User(name, email) {
//     this.name = name;
//     this.email = email;
//     this.admin = true;
// }

// User.prototype.hello = function() {
//     return 'hello';
// }

// const richard = new User('Richard', 'r@gmail.com');
// console.log(richard.hello());
// console.log(richard);

class Car {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.hello = function() {
            console.log('My car is a ' + this.make);
        }
    }
}

const modelX = new Car('tesla', 'modelx', 'black');
console.log(modelX);
const lamb = new Car('lamborghini', 'urus', 'black');
console.log(lamb);
const corolla = new Car('toyota', 'corolla', 'silver');
console.log(corolla);
console.log(modelX.hello())