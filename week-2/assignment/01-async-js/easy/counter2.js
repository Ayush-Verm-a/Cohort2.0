const before = new Date();
const btime = before.getTime();
let counter = 0;

while (true) {
    const now = new Date();
    const ntime = now.getTime();
    if (ntime - btime === (counter * 1000) + 1000) {
        counter++;
        console.log(counter);
    }
}