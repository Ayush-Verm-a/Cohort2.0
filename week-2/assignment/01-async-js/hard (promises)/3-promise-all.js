/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, t * 1000);
    })
    return p;
}

function wait2(t) {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, t * 1000);
    })
    return p;
}

function wait3(t) {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, t * 1000);
    })
    return p;
}

function calculateTime(t1, t2, t3) {
    const btime = new Date().getTime();
    let ans;
    let p1 = wait1(t1);
    let p2 = wait2(t2);
    let p3 = wait3(t3);
    let pall = Promise.all([p1, p2, p3]);
    let newp = pall.then((data) => {
        const ntime = new Date().getTime();
        ans = ntime - btime;
        return ans;
    })
    return newp;
}

module.exports = calculateTime;
