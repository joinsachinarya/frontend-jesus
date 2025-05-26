// run the array of promise in sequence , do not use promise.all 

// promise.all execute promises in parallel 

const task1 = () => new Promise((res, rej) => {
    setTimeout(() => {
        console.log(1)
        res()
    }, 1000)
})
const task2 = () => new Promise((res, rej) => {
    setTimeout(() => {
        console.log(2)
        res()
    }, 1000)
})
const task3 = () => new Promise((res, rej) => {
    setTimeout(() => {
        console.log(3)
        res()
    }, 1000)
})

const tasks = [task1, task2, task3]

async function exe(params) {
    for (let i of params) {
        await i()
    }
}
exe(tasks)


// ✅ Final Takeaways:
// forEach: ❌ Async/await ke sath reliable nahi — await ko ignore karta hai

// for...in: ⚠️ Array ke liye recommended nahi — ye indexes deta hai + inherited props bhi loop ho sakte hain

// for...of: ✅ Best choice for arrays — async/await ke sath perfect pairing

// Interview line:
// “For running promises in sequence from an array, I prefer for...of because it works cleanly with async/await, unlike forEach or for...in, which have quirks.”