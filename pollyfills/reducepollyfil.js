let arr = []
let sum = arr.reduce((acc, curr)=>{
  acc = acc+curr;
  return acc;
}, 0)

function myReduce(callback, initialvalue){
let context = this;
  if(!Array.isArray(context)){
    throw new Error("Not allowed")
  }


let acc;
  let startIndex =0;
  if(initialvalue){
acc = initialvalue;
    startIndex = 0;
  }else{
    if(context.length === 0){
      return 0
    }
acc = context[0]
    startIndex = 1;
}

for(let i = startIndex; i< context.length; i++){
acc = callback(acc, context[i], i, this)
}
return acc;
  
}

Array.prototype.mySum = myReduce


let sum2 = arr.mySum((acc, curr)=>{
  acc = acc + curr;
  return acc
},0)


console.log(sum, sum2)
