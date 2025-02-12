// currying a technique of working with functions

// what currying does is, it transform a  function into something 
// like fun(a, b, c, d) into fun(a)(b)(c)(d)

// for example , let's say i want to calculate area of a rectangle
// then i will create create function like
function area(h, w) {
    console.log(h * w);
}
area(2, 3)

// but now if i use currying technique on this function 
// i will do like this

const areaCurry = function (h) {
    return function (w) {
        console.log(h * w)
    }
}
areaCurry(2)(3)