//Se declara un objeto vacío llamado Math. Este objeto se utiliza para agrupar funciones relacionadas con operaciones matemáticas.
const Math = {};

//Se declara una función llamada add con dos parámetros a y b
function add(a,b) {
    //Se retorna el valor de la suma entre los parámetros a y b
    return a + b;
}

//Se declara una función llamada subtract con dos parámetros a y b
function subtract(a,b) {
    //Se retorna el valor de la resta entre los parámetros a y b
    return a - b;
}

//Se declara una función llamada multiply con dos parámetros a y b
function multiply(a,b) {
    //Se retorna el valor de la multiplicación entre los parámetros a y b
    return a * b;
}

//Se declara una función llamada divide con dos parámetros a y b
function divide(a,b) {
    //Se utiliza if para verificar si b es igual a 0 y si a es igual a 0
    if (b == 0 && a == 0) {
        //Si la condición se cumple, se retornara un mensaje de error que indica que no se puede dividir entre cero
        return "Error: no se puede dividir entre cero"
    //Y si b es igual a cero
    } else if (b == 0) {
        //Si la condición se cumple, se retornara un mensaje de error que indica que no se puede dividir entre cero
        return "Error: no se puede dividir entre cero" 
    }
        //Si ninguna de las dos condiciones se cumple se retorna el resultado de la división entre a y b
        return a / b;
    }

/*Se asignan las funciones add, subtract, multiply, y divide como propiedades del objeto Math. Esto crea 
métodos asociados con el objeto Math.*/
Math.add = add;
Math.subtract = subtract;
Math.multiply = multiply;
Math.divide = divide;

//Se exporta el objeto Math para que pueda ser utilizado en otros archivos. Esto se logra usando module.exports.
module.exports = Math;
