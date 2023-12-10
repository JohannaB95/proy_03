//Se carga la libreria colors para permitir el uso de estilos de colores en la terminal
require('colors');

//Se carga el código que contiene el archivo math.js en la carpeta modules.
const math = require('./modules/math.js')

//Se limpia la consola antes de imprimir la interfaz que contiene las funciones matemáticas
console.clear();

//Se imprime en la consola el contenido del objeto math
console.log(math);

//Se declara una función flecha main asincrónica 
const main = async() => {

    //Se imprime en la consola un recuadro con un título
    console.log('*****************************'.blue);
    console.log('*  '.blue,'Funciones Matematicas'.bgGreen, '  *'.blue);

    console.log('*****************************\n'.blue);
    /*Se imprime en la consola un recuadro con los resultados de cada una de las operaciones mátematicas que
    se realizaran*/
    console.log('*****************************'.yellow);
    console.log('*                           *'.yellow);

    console.log('*             '.yellow + math.add(5,3) + '             *'.yellow );
    console.log('*            '.yellow + math.subtract(2,8) + '             *'.yellow );
    console.log('*            '.yellow + math.multiply(2,8) + '             *'.yellow );
    console.log('*    '.yellow + math.divide(2,0.9) + '     *'.yellow );
    console.log('*****************************'.yellow);
}
//Se llama a la función main
main();
