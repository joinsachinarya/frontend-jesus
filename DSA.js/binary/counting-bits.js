var countBits = function (n) {
    let ans = [];
    for (let i = 0; i < n; i++) {
        let cnt = 0;
        let num = i;
        while (num !== 0) {
            if (num & 1) cnt++;
            num = num >> 1;
        }
        ans.push(cnt)
    }
    return ans;

};


console.log(countBits(5));


var countBits = function(n) {
    let ans = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        ans[i] = ans[i >> 1] + (i & 1);
    }
    return ans;
};

console.log(countBits(5));  // Outputs: [0, 1, 1, 2, 1, 2]
