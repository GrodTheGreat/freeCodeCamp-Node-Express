const { readFile, writeFile } = require('fs');

console.log('started first task');
// CHECK FILE PATH!!!
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log('complete first task');
});
console.log('starting next task');