// const lista1 = [ //Se utilizara esta lista para calcular su promedio/media arítmetica
//     100,
//     200,
//     300,
//     500,
// ];

const calcularMediaAritmetica = (lista) => {
    // let sumaLista = 0; //Se declara una variable let para que sea posible cambiar su valor con un ciclo for;
    
    // for(let i = 0; i < lista.length; i++){ //<--Este for se ejecutará mientra i sea menor a los elementos contenidos en lista1;
    
        //sumaLista = sumaLista + lista[i] //<-- Usando [i] estamos indicando que sumaremos cada cantidad que vaya recorriendo nuestra variable i mientras dure el recorrido de el array lista1; 
    //}

    //Una alternativa para iterar los arrays seria utlitzar el metodo reduce();
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) //<-- Esta funcion anonima recibira el valor de la suma de todos nuestros elementos y por defecto inciará en 0, ademas de los nuevos elementos que se le sumaran al valor acumulado.
        {
            return valorAcumulado + nuevoElemento;
        }
    ); //<-- El metodo reduce recibe una funcion como parametro y suma los elementos que le vayamos dando.
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

