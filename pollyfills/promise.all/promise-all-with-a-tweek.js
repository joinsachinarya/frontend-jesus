const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise1 resolved')
    }, 1000)
})

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("promise2 rejected")
//     }, 1000)
// })


const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise3 resolved")
    }, 1000)
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise3 resolved")
    }, 1000)
})

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise3 resolved")
    }, 1000)
})

const promise6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise3 resolved")
    }, 1000)
})


const promise7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise3 resolved")
    }, 1000)
})


const promise8 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise3 resolved")
    }, 1000)
})

const promise9 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise3 resolved")
    }, 1000)
})

function customAll(args) {
    return new Promise((resolve, reject) => {
        let ans = [];
        let i = 0;
        let n = args.length;

        function callNextPromise() {
            if (i >= n) {
                return resolve(ans)
            }
            Promise.resolve(args[i]).then((res) => {
                ans[i] = res;
                i++;
            }).catch((err) => {
                reject(err)
            }).finally(() => {
                callNextPromise()
            })
        }
        callNextPromise()
    })
}



Promise.customAll = customAll

const val = Promise.customAll([promise1, promise3, promise4, promise5, promise6, promise8, promise9])  // my customAll should resolve ~8 seconds (1+1) instead of 1 seconds(parallel like .all)

console.log(val.then((res) => console.log(res))) // why it taking only ~1 seconds instead of  ~8 seconds, because i have 8 promises



