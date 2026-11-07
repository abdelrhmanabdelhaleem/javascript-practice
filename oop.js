// object
// let person = {
//   name: "abdo",
//   age: 22,
//   display: function () {
//     console.log(this.name);
//   }
// };

// console.log(person.name);
// person.display();

// constructor function
// function Employee(name, age) {
//   let salary = 50; // private

//   this.name = name;
//   this.age = age;

//   this.display = function () {
//     console.log(salary);
//   };
// }

// let emp = new Employee("abdo", 22);
// console.log(emp.name);
// emp.display();

// prototype
// Employee.prototype.displayName = function () {
//   console.log(this.name);
// };

// emp.displayName();

// inheritance
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// function Employee(name, age, salary) {
//   Person.call(this, name, age);
//   this.salary = salary;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// let emp = new Employee("abdo", 22, 10000);
// console.log(emp);

// ES6 Classes

class Person {
  #address;

  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.#address = address;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  display() {
    return `${this.name} ${this.age}`;
  }

  static type = "male";
}

// inheritance

class Employee extends Person {
  static count = 0;

  constructor(name, age, address, salary) {
    super(name, age, address);

    this.salary = salary;
    Employee.count++;
  }

  display() {
    return `${super.display()} ${this.salary}`;
  }

  static displayCount() {
    return Employee.count;
  }
}

let obj = new Employee("abdo", 22, "giza", 10000);
let obj2 = new Employee("ahmed", 25, "cairo", 12000);

console.log(obj);
console.log(obj.display());
console.log(Employee.displayCount());

// encapsulation
// class Bank {
//   #balance = 0;

//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//     }
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// let account = new Bank();
// account.deposit(500);
// console.log(account.getBalance());

// polymorphism
// class Shape {
//   area() {
//     return 0;
//   }
// }

// class Circle extends Shape {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }

//   area() {
//     return Math.PI * this.radius ** 2;
//   }
// }

// class Rectangle extends Shape {
//   constructor(width, height) {
//     super();
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     return this.width * this.height;
//   }
// }

// let shapes = [
//   new Circle(5),
//   new Rectangle(4, 6)
// ];

// shapes.forEach(shape => console.log(shape.area()));

// instanceof
// console.log(obj instanceof Employee);
// console.log(obj instanceof Person);
