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

const calcularMediana = (numeros) => {
    let mediana;
    const result = document.getElementById("results");
    const errors = document.getElementById("media__errors");
    const lista = document.getElementById("InputLista").value;
    if(lista.length >= 2) {
        numeros = lista.split(',').map(Number);
        const listaOrdenada = numeros.sort((num1,num2) => num1 - num2);
        const mitadLista = parseInt((listaOrdenada.length / 2));
        const esPar = (num) => {
            if (num % 2 === 0) {
                return true
            } else {
                return false;
            }
        };
        if (esPar(numeros.length)) {
            const num1 = numeros[mitadLista - 1];
            const num2 = numeros[mitadLista];
            const promedio = (num1 + num2) / 2;
            mediana = promedio;
            errors.style.display = "none";
            result.style.display = "block";
            result.innerText = `Mediana: ${mediana}`
        } else {
            mediana = numeros[mitadLista];
            errors.style.display = "none";
            result.style.display = "block";
            result.innerText = `Mediana: ${mediana}`;
        }
    } else {
        result.style.display = "none";
        errors.style.color = "red";
        errors.innerText = `Ingresa los valores requeridos`
    }
}

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

const calcularModa = (numeros) => {
    const result = document.getElementById("results");
    const errors = document.getElementById("media__errors");
    const lista = document.getElementById("InputLista").value;
    if(lista.length >= 2){
        numeros = lista.split(',').map(Number);
        const listaCount = {}; //Declaramos donde se almancenaran los datos como objeto;
        numeros.map((numero) => {
            if(listaCount[numero]){
                listaCount[numero] += 1;
            } else {
                listaCount[numero] = 1;
            }
        });
        //Convertimos listaCount en un array y utilizamos el metodo sort para ordenarlos de menor a mayor
        const listaArray = Object.entries(listaCount).sort((num1,num2) => num1[1] - num2[1]);
        const moda = listaArray.pop();
        result.innerText = `Moda: ${moda}`;
    } else {
        result.style.display = "none";
        errors.style.display = "block";
        errors.style.color = "red";
        errors.innerText = "Ingresa los valores requeridos"
    }
};


// const lista1 = [ //Se utilizara esta lista para calcular su promedio/media arítmetica
//     100,
//     200,
//     300,
//     500,
// ];

const calcularMediaAritmetica = (numeros) => {
    // let sumaLista = 0; //Se declara una variable let para que sea posible cambiar su valor con un ciclo for;
    
    // for(let i = 0; i < lista.length; i++){ //<--Este for se ejecutará mientra i sea menor a los elementos contenidos en lista1;
    
        //sumaLista = sumaLista + lista[i] //<-- Usando [i] estamos indicando que sumaremos cada cantidad que vaya recorriendo nuestra variable i mientras dure el recorrido de el array lista1; 
    //}

    //Una alternativa para iterar los arrays seria utlitzar el metodo reduce();
    const result = document.getElementById("results");
    const errors = document.getElementById("media__errors");
    const lista = document.getElementById("InputLista").value;
    if(lista.length >= 2){
        numeros = lista.split(',').map(Number);
        const sumaLista = numeros.reduce(
            function (valorAcumulado = 0, nuevoElemento) //<-- Esta funcion anonima recibira el valor de la suma de todos nuestros elementos y por defecto inciará en 0, ademas de los nuevos elementos que se le sumaran al valor acumulado.
            {
                return valorAcumulado + nuevoElemento;
            }
            ); //<-- El metodo reduce recibe una funcion como parametro y suma los elementos que le vayamos dando.
            
        result.style.display = "block";
        errors.style.display = "none";
        const mediaAritmetica = sumaLista / lista.length;
        result.innerText = `Media aritmética: ${mediaAritmetica.toFixed(2)}`;
    } else {
        result.style.display = "none";
        errors.style.display = "block";
        errors.style.color = "red";
        errors.innerText = `Ingresa los valores requeridos`;
    }
}

