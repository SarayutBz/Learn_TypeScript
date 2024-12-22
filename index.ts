function total(a:number,b:number){
    return a+b
}
console.log(100,200)


let fname:string ="Ball Sarayut"
let age:number = 21
let isWorking:boolean = false


console.log(`ชื่อ = ${fname.toUpperCase()}`)
console.log(`ชื่อ = ${age}`)

// Any & Unknown

// any เปลี่ยน type ได้หมดเลย แต่ไม่มีการตรวจสอบไรเลย
let myVar:any = "Sarayut"
myVar = 10
myVar = true

function formatNumber(num:number){
    return num.toFixed(2)
}

// unknown  เปลี่ยน type ได้หมด แต่มีการตรวจสอบ
let myVar2:unknown = "50.123"
myVar2 = 50.123
if(typeof myVar2 === "number"){
    console.log(formatNumber(myVar2))
}

// Type Assertions ระบุชนิดข้อมูล
let username:unknown
username ="sarayut"
console.log((username as string).toUpperCase())
// หรือ
console.log(<string>username.toUpperCase())


// if else
let amount:number=50
let result:String
if(amount % 2 ==0){
    result ="เลขคู่"
}
else{
    result ="เลขคี่"
}
console.log(`ผลลัพธ์ = ${result}`)

// Switch..case

let service:number=1;
let result2:string
switch(service){
    case 1:result2="สอบถามยอดเงินในบัญชี"
       break
    case 2:result2="ฝากเงิน"
       break
    case 3:result2="ถอนเงิน"
       break
    default:
        result2="หมายเลขบริการไม่ถูกต้อง"
        break
}
console.log(`ผลลัพธ์ = ${result2}`)

// for loop
for(let count=1;count<=10;count++){
    console.log(count)
}

let users:string[]=["บอล","แฟ้ม","วา"]
for(let i =0;i<users.length;i++){
    console.log(users[i])
}
// หรือ
users.forEach((element)=>{
    console.log(element)
})

