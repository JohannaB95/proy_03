require('colors');

const math = require('./modules/math.js')

console.clear();
console.log(math);

const main = async() => {
    console.log('*****************************'.blue);
    console.log('*  '.blue,'Funciones Matematicas'.bgGreen, '  *'.blue);

    console.log('*****************************\n'.blue);
    console.log('*****************************'.grey);
    console.log('*                           *'.grey);

    console.log(math.add(5,3));
    console.log(math.substract(2,8));
    console.log(math.multiply(2,8));
    console.log(math.divide(2,0.9));
}

main();
