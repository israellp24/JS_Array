const pets = ['cat', 'dog', 'bat']

let inclueInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        inclueInArray=true;
        break;
    }
}

console.log('for', inclueInArray);

const rta = pets.includes('dog');
console.log('includes', rta);