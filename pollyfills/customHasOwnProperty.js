let obj = {
  name: "user"
}
console.log(obj.hasOwnProperty("age"))

function customHasOwnProp(myKey) {
  let context = this
  for (let key in context) {
    if (key === myKey) {
      return true;
    }
  }
  return false
}

Object.prototype.customHasOwnProp = customHasOwnProp;
console.log(obj.customHasOwnProp("name"))

