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
