const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise1 resolved')
    }, 1000)
})

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("promise2 rejected")
//     }, 2000)
// })


const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise3 resolved")
    }, 4000)
})


const finalVal = Promise.all([promise1,
    // promise2,
    promise3
])




function customAll(promises) {
    return new Promise((resolve, reject) => {
        let ans = [];
        promises.forEach((p, i) => {
            p.then((res) => {
                ans[i] = res;
                if (ans.length === promises.length) {
                    resolve(ans)
                }
            }).catch((err) => {
                reject(err);
            })
        })
    })
}

Promise.customAll = customAll

const finalVal2 = Promise.customAll([promise1,
    // promise2,
    promise3
])


console.log(finalVal.then((res1) => console.log("res1", res1)), finalVal2.then((res2) => console.log("res2", res2)))