
// const mitadLista1 = (lista1.length / 2);
// // const calcularMediaAritmetica = (lista) => {

// // }
// const esPar = (num) => {
//     if (num % 2 === 0) { //Si num(entero) divido ente 2 nos da cero entonces es par
//         return true;
//     } else {
//         return false; 
//     }
// }

// let mediana; //Creamos la variable mediana.
 
// if (esPar(lista1.length)) {
//     //Necesitamos saber si la lista es par o impar;
//     //Y en base a eso decidir el comportamiento de nuestro código. 
//     const elemento1 = lista1[mitadLista1 - 1];
//     const elemento2 = lista1[mitadLista1];
//     const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
//     mediana = promedioElemento1y2;
//     console.log(`Los dos elementos que estan en medio son ${elemento1} y ${elemento2}`)
//     console.log(`Esta lista es par y su mediana es ${mediana}`)
// }   else {
//     //Si es impar function mitadLista(lista1).
//     // output: mediana
//      mediana = lista1[mitadLista1];
//      console.log(`Es impar ${mediana}`) //<-- Debemos asegurarnos de que la mediana sea un numero entero.
// }

// //Convertir todo esto en una funcion y admitir cualquier cantidad de datos numericos.
// // Metodo para acomodar de mayor a menor las cantidades.

const calcularMediana = (lista) => {
    let mediana;
    const listaOrdenada = lista.sort((num1,num2) => num1 - num2);
    const mitadLista = parseInt((listaOrdenada.length / 2));
    const esPar = (num) => {
        if (num % 2 === 0) {
            return true
        } else {
            return false;
        }
    };
    if (esPar(lista.length)) {
        const num1 = lista[mitadLista - 1];
        const num2 = lista[mitadLista];
        const promedio = calcularMediaAritmetica([num1,num2]);
        mediana = promedio;
        return console.log(`Los numeros que se encuentran en medio son ${num1} y ${num2} y su mediana es ${mediana}`);
    } else {
        mediana = lista[mitadLista];
        return console.log(`La mediana es ${mediana}`);
    }
}