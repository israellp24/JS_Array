const numbers = [1, 2, 3, 4];

let rta = false;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 === 0) {
    rta = true;
    break;
  }
}

console.log(rta);

const rta2 = numbers.some((item) => item % 2 === 0);

console.log("rta2", rta2);

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

const rta3 = orders.some((item) => item.delivered);

console.log("rta3", rta3);

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 19),
  endDate: new Date(2021, 1, 1, 20, 30),
};

//Instalar  npm i date-fns, para ver una colision entre fechas

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

//verifica si se sobrepone la fecha
const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start:date.startDate, end: date.endDate},
            {start:newDate.startDate, end: newDate.endDate}
        );
    })
}

console.log('isOverlap',isOverlap(newAppointment));