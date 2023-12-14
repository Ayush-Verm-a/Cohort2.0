const fs = require('fs');
let text;

fs.readFile('a.txt', 'utf-8', (err, data) => {
    text = data;
    let arr = data.split(' ');
    let ans = '';
    arr.forEach((word) => {
        if (word.length > 0) {
            ans += word + ' ';
        }
    })
    console.log(ans);
    fs.writeFileSync('a.txt', ans, (err) => {

    });
})

