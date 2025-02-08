
let num = 0;
const interval =  setInterval(()=>{
    num+=1;
    console.log(num)
    if(num ===5){
        clearInterval(interval);
    }
},1000)
