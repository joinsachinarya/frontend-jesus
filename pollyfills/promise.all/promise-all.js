const promise1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise1 resolved')
    }, 1000)
})

const promise2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise2 rejected")
    }, 2000)
})


const promise3 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise2 resolved")
    }, 4000)
})


function sol() {
    const val2 = promise2();
    val2.then((res) => console.log("val2", res)).catch((err) => console.log("val2", err)).finally(() => {
        const val3 = promise3()
        val3.then((res) => console.log("val3", res)).catch((err) => console.error('val3', err)).finally(() => {
            const val1 = promise1()
            val1.then((res) => console.log("val1", res)).catch((err) => console.err('val1', err)).finally(() => {
                console.log("All async promise functions called")
            })
        })
    })
}

sol();
