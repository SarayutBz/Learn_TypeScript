"use strict";
// function void
function sayHi() {
    console.log("Hello TypeScript");
}
sayHi();
// หรือ
function sayHi2() {
    console.log("Hello TypeScript");
}
sayHi2();
// function parameter
function sayHi3(name) {
    console.log(`Hello ${name}`);
}
sayHi3("ball");
// function Return
function sayHi4() {
    return "Hello world";
}
sayHi4();
console.log(sayHi4());
// ส่งข้อมูลออกมาเป็น string
function checkNumber(num) {
    if (num % 2 == 0) {
        return "เลขคู่";
    }
    else {
        return "เลขคี่";
    }
}
checkNumber(10);
console.log(checkNumber(10));
// Arrow function
const nameYou = (name) => {
    return name;
};
console.log(nameYou("ball"));
// Default Parameter
function showEmployee(name, age, address = "เชียงใหม่") {
    console.log(`ชื่อ = ${name} , อายุ = ${age} , ที่อยู่ = ${address}`);
}
showEmployee("บอล", 21);
// Object
const person = {
    name: "sarayut",
    age: 21,
};
const person2 = {
    name: "Ball",
    age: 21,
};
function showDatail(data) {
    console.log(`ชื่อ = ${data.name} , อายุ = ${data.age}`);
}
showDatail(person);
// return object
const position = { lat: 10, long: 20 };
function randomPosition() {
    return {
        lat: Math.random(),
        long: Math.random()
    };
}
console.log(randomPosition());
// Excess Properties Check
function showDatail2(data) {
    console.log(`ชื่อ = ${data.name} , อายุ = ${data.age}`);
}
showDatail2({ name: "ball", age: 21, address: "ฝาง" });
let emp1 = { id: 1, name: "sarayut", salary: 1000000, phone: "3123141213" };
console.log(emp1);
let emp2 = { id: 1, name: "sarayut", salary: 1000000 };
console.log(emp2);
let emp3 = { id: 1, name: "sarayut", salary: 1000000 };
emp3.salary = 1;
emp3.id = 0;
console.log(emp3);
// Array
const user1 = "บอล";
const user2 = "ปริม";
const users = [];
users.push("บอล");
users.push("ปริม");
console.log(users[1]);
for (let i = 0; i < users.length; i++) {
    console.log(`ลำดับที่ ${i + 1} = ${users[i]}`);
}
users.forEach(element => {
    console.log(element);
});
const employees = [];
employees.push({ name: "บอล", salary: 99999, department: "programmer" });
employees.push({ name: "ปริม", salary: 22299999 });
console.log(employees);
function sayHii(name) {
    if (!name) {
        return 'Hello TypeScript';
    }
    if (typeof name == 'string') {
        return `Hello ${name}`;
    }
    throw new Error("ชนิดข้อมุลไม่ถูกต้อง");
}
console.log(sayHii("sarayut"));
function total(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }
    if (typeof a == "string" && typeof b == "string") {
        return parseInt(a) + parseInt(b);
    }
    throw new Error("ชนิดไม่ถูกต้อง");
}
console.log(total(100, 200));
console.log(total("100", "200"));
// console.log(total(true,"200"))
// Spread Operator
const section = ["บัญชี", "การเงิน"];
const department2 = ["programmer", "travel", "ceo"];
department2.push(...section);
console.log(department2);
// Rest Parameter
const total2 = (...number) => {
    return number.reduce((result, value) => {
        return result + value;
    }, 0);
};
console.log(total2(100, 200));
console.log(total2(100, 200, 300));
console.log(total2(100, 200, 300, 400));
console.log(total2(100, 200, 300, 400, 500));
// Destructuring (การสลายโครงสร้าง)
const colors = ["แดง", "เขียว", "น้ำเงิน"];
const [red, green, blue] = colors;
console.log(red);
console.log(green);
console.log(blue);
const person3 = {
    fname: 'ก้อง',
    age: 21,
    address: "เชียงใหม่"
};
const { fname, age, address } = person3;
console.log(fname);
console.log(age);
console.log(address);
// Tuple
const point = [10, 20];
console.log(point);
const goodStatus = [200, "ok"];
console.log(goodStatus);
// Tuple Label
const point2 = [10, 20];
const good = [200, 'ok'];
const notFound = [404, "ไม่พบ"];
const goodStatus2 = [200, "ok"];
console.log(goodStatus2);
