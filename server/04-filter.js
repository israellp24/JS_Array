const words = ['spray', 'limit','elite','exuberant'];

const newArray = [];

for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if(element.length >= 6){
        newArray.push(element);
    }    
}

console.log('original', words);
console.log('new', newArray);

//con filter

const words2 = ['spray', 'limit','elite','exuberant'];
const newArray2 = words2.filter(item=>item.length>6);
console.log('original', words2);
console.log('new', newArray2);

//---------------------------
const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
    customerName: "Nicolas",
    total: 434,
    delivered: false,
    },
  ];

  const rta = orders.filter(item => item.delivered && item.total>=100);
  console.log('rta', rta)

  const search = (query)=> {
    return orders.filter(item => {
        return item.customerName.includes(query);
    });
  }

  console.log(search('Nico'));