const numbers = [1,30,49,29,10,13];

let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 30) {
        rta = element;
        break
    }
}

console.log('for', rta);

const rta2 = numbers.find(item => item ===3023234);

console.log('find',rta2);

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];


const rta3 = products.find(item => item.id ==='🍔');

console.log('find_2',rta3);

//si no encuentra el elemento nos retorna undefined

//variante findIndex
const rta4 = products.findIndex(item => item.id ==='🍔');

console.log('find_3',rta4);

//si no encuentra el elemento nos retorna -1

