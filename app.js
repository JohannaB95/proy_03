require('colors');

const math = require('./modules/math.js')

console.clear();
console.log(math);

const main = async() => {
    console.log('*****************************'.blue);
    console.log('*  '.blue,'Funciones Matematicas'.bgGreen, '  *'.blue);

    console.log('*****************************\n'.blue);
    console.log('*****************************'.yellow);
    console.log('*                           *'.yellow);

    console.log('*             '.yellow + math.add(5,3) + '             *'.yellow );
    console.log('*            '.yellow + math.substract(2,8) + '             *'.yellow );
    console.log('*            '.yellow + math.multiply(2,8) + '             *'.yellow );
    console.log('*    '.yellow + math.divide(2,0.9) + '     *'.yellow );
    console.log('*****************************'.yellow);
}

main();
