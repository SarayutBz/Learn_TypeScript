// function void
function sayHi() {
  console.log("Hello TypeScript");
}
sayHi();

// หรือ
function sayHi2(): void {
  console.log("Hello TypeScript");
}
sayHi2();

// function parameter
function sayHi3(name: string): void {
  console.log(`Hello ${name}`);
}
sayHi3("ball");

// function Return
function sayHi4(): string {
  return "Hello world";
}
sayHi4();
console.log(sayHi4());

// ส่งข้อมูลออกมาเป็น string
function checkNumber(num: number): string {
  if (num % 2 == 0) {
    return "เลขคู่";
  } else {
    return "เลขคี่";
  }
}
checkNumber(10);
console.log(checkNumber(10));

// Arrow function
const nameYou = (name: string): string => {
  return name;
};
console.log(nameYou("ball"));

// Default Parameter
function showEmployee(
  name: string,
  age: number,
  address: string = "เชียงใหม่"
) {
  console.log(`ชื่อ = ${name} , อายุ = ${age} , ที่อยู่ = ${address}`);
}

showEmployee("บอล", 21);

// Object
const person = {
  name: "sarayut",
  age: 21,
};
const person2: {
  name: string;
  age: number;
} = {
  name: "Ball",
  age: 21,
};

function showDatail(data:{name:string,age:number}){
    console.log(`ชื่อ = ${data.name} , อายุ = ${data.age}`)
}

showDatail(person)

// return object
const position : {lat:number,long:number} = {lat:10,long:20}
function randomPosition():{lat:number,long:number}{
    return{
        lat:Math.random(),
        long:Math.random()
    }
}

console.log(randomPosition())

// Excess Properties Check
function showDatail2(data:{name:string,age:number}){
    console.log(`ชื่อ = ${data.name} , อายุ = ${data.age}`)
}

showDatail2({name:"ball",age:21,address:"ฝาง"})

// Type Aliases
type Employee ={
    id:number,
    name:string,
    salary:number,
    phone:string
}

let emp1:Employee={id:1,name:"sarayut",salary:1000000,phone:"3123141213"}
console.log(emp1)

// Type Aliases (Optional Properties)
type Employee2 ={
    id:number,
    name:string,
    salary:number,
    phone?:string
}
let emp2:Employee2={id:1,name:"sarayut",salary:1000000}
console.log(emp2)

// Type Aliases (Readonly Modifier) อ่านได้อย่างเดียว
type Employee3 ={
    readonly id:number,
    readonly name:string,
    salary:number,
    phone?:string
}
let emp3:Employee3={id:1,name:"sarayut",salary:1000000}
emp3.salary = 1
emp3.id = 0
console.log(emp3)


// Array

