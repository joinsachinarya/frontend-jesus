// Object.assign are used to copy object and for merging object

const obj = {};
const obj2 = {
    name:"A",
    age:22
}

const obj3 = Object.assign(obj, obj2)
const obj4 = {
    age:40,
    sex:"F"
}
const obj5 = Object.assign(obj3, obj4)
console.log(obj5)