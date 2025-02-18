let foo  = function(){
    console.log(a)
    let a = 5;
    console.log(a);
}


var foo2 = function(){
    var args = Array.prototype.slice.call(arguments);
    console.log(args[1])
}
console.log(foo2(1,2,2))
