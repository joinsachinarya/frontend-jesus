function customAll(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        async function runSequentially() {
            try {
                for (let i = 0; i < promises.length; i++) {
                    results[i] = await promises[i]();
                }
                resolve(results);
            } catch (err) {
                reject(err);
            }
        }
        runSequentially();
    });
}

Promise.customAll = customAll;

function createTasks() {
    let ans = []
    for (let i = 0; i < 4; i++) {
        ans.push(() => new Promise((resolve, reject) => setTimeout(() => resolve(`Resolved ${i}`), 1000)))
    }
    return ans;
}
const tasks = createTasks()
console.log(tasks)
Promise.customAll(tasks).then((res) => console.log(res))
