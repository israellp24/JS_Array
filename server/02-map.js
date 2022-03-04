const letters = ['a','b','c'];

const newArray = [];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + '+');
}

console.log('origal', letters);
console.log('new', newArray);

//Con map

const letters2 = ['a','b','c'];

let newArray2 = [];

newArray2 = letters2.map(item=> item + '++');
console.log('origal', letters2);
console.log('new', newArray2);