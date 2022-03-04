const letters = ['a','b','c'];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log(element);
}


const letters2 = ['a','b','c'];
letters2.forEach(item => console.log('forEach',item));