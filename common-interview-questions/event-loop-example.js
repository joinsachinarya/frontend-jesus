console.log(1)

setTimeout(()=>{
  console.log(2)
},0)

Promise.resolve(3).then((res)=>{
  console.log(res)
  setTimeout(()=>{
    console.log(7)
  },100)
  setTimeout(()=>{
    console.log(8)
  },0)
})

setTimeout(()=>{
  console.log(4)
},100)

setTimeout(()=>{
  console.log(9)
},0)

setTimeout(()=>{
  console.log(5)
},-100)

console.log(6)

// my answer
// 1
// 6
// 3
// 2
// 9
// 5
// 4
// 8 
// 7

// correct answer
// 1
// 6
// 3
// 2
// 9
// 5
// 8 
// 4
// 7

















let a = true
setTimeout(()=>{
  a = false
},2000)

setTimeout(()=>{
  a = false;
})

while(a){
  console.log("Hello world")
}
// infinite loop hello world


