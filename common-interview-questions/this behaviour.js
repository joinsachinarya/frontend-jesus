
const obj = {
  value : 42,
  getVal: function(){
    return this.value;
  }
}

const getVal = obj.getVal;
const res = getVal()
console.log(res) // undefined in non strict mode because window obj will be present for getVal
// TypeError in strict mode because undefined obj for getVal()

