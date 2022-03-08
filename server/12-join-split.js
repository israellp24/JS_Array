const elements = ["Fire", "Air", "Water"];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}

console.log('for', rtaFinal.substring(0,rtaFinal.length - separator.length));

const rta =elements.join('--');

console.log('join', rta);

//Split separar un array por un patron

const title = 'Curso de manipulacion de arrays';

const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);