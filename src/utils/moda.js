// const lista1 = [
//     1,
//     1,
//     2,
//     3,
//     4,
//     5,
//     5,
//     7,
//     7,
//     7,
//     8,
//     9,
//     10,
//     7,
// ]

// //Para obtener la moda de una lista de numeros o textos, debemos guardar la cantidad de veces que se repite cada dato dentro de un objeto con el resultado final de cada uno.

// const lista1Count = {} //<-- Declaramos el objeto donde se almacenaran estos datos.

// lista1.map((elemento) => {
//     //Utilizamos map para mapear cada elemento dentro de la lista asignada
//     if (lista1Count[elemento]){
//         //Si el elemento mapeado en la lista se repite.
//         lista1Count[elemento] += 1; //<-- Se le suma uno a ese elemento que quedará guardado como un objeto.
//     } else {
//         lista1Count[elemento] = 1; //Si no se repite entonces ese elemento es igual a uno.
//     }
// });
// console.log(lista1Count);
// //Para que javascript sepa cual es el elemento que mas se repite necesitamos convertir la lista1Count a un array.
// const lista1Array = Object.entries(lista1Count);
// //Utilizamos el metodo sort para ordenar los numeros de menor a mayor
// const lista1ArrayOrdenada = lista1Array.sort((num1,num2) => num1[1] - num2[1]
// )

// const moda = lista1ArrayOrdenada[8];
// console.log(lista1ArrayOrdenada);
// console.log(`La moda es ${moda}`);

//Pasar todo esto a una funcion;

const calcularModa = (lista) => {
    const listaCount = {}; //Declaramos donde se almancenaran los datos como objeto;
    lista.map((numero) => {
        if(listaCount[numero]){
            listaCount[numero] += 1;
        } else {
            listaCount[numero] = 1;
        }
    });
    console.log(listaCount);
    //Convertimos listaCount en un array y utilizamos el metodo sort para ordenarlos de menor a mayor
    const listaArray = Object.entries(listaCount).sort((num1,num2) => num1[1] - num2[1]);
    console.log(listaArray);
    const moda = listaArray.pop();
    console.log(`La moda es igual a ${moda}`)
};

