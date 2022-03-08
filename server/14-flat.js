const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,[9,10,[11,12]]]
];

const newArray =[];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let index = 0; index < array.length; index++) {
        const element = matriz[i][index];
        newArray.push(element);
    }
    
}

console.log('for',newArray);

const rta = matriz.flat(3);

console.log('flat',rta);



