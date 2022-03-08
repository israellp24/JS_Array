const totals = [1,2,3,4];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
    
}
console.log(sum);

//con reduce
const totals2 = [1,2,3,4];
let sum2 = 0;
const rta = totals2.reduce((sum2,element) => sum2 + element);

console.log('rta', rta);