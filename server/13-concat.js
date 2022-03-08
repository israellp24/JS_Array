const elements = [1,1,2,2];

const othersElements = [3,3,4,4];

const newArray = [...elements]; //split operation ...

for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}

console.log('for',newArray);

const rta = elements.concat(othersElements);
console.log('concat',rta);

const rta2 = [...elements,...othersElements];
console.log('splitOpetarion',rta2);

const rta3 = [...elements,...othersElements,'random'];
console.log('splitOpetarion_2',rta3);

//si se quiere modificar el array original
elements.push(...othersElements);
console.log('elements',elements );

