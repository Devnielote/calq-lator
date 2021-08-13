//La media geometrica es un tipo de media que se calcula como la raiz del producto de un conjunto de números estrictamente positivos.

//Todos los valores se multiplican entre sí.
//Todos los numeros deben ser postivos.
//Se usa principalmente para calcular medias sobre porcentajes.

//Fórmula de la media geométrica.
    //Media geométrica = n √ x1 * x2 * x3 ... * xn;
        //N = numero total de observaciones, por ejemplo si tenemos el crecimiento de los beneficios de una empresa durante 4 periodos,N será 4.
        // X = la x es sobre la que calculamos la media geométrica. Siguiendo el ejemplo anterior, el crecimiento de los beneficios estará expresado en porcentaje y será la variable X.
        // i representa al posicion de cada observacion, en este ejemplo podriamos ponerle un numero a cada periodo. Un 1 al periodo 1, un 2 al periodo 2, etc. De manera que x1 es el crecimiento de los beneficios en el periodo 1, x2 el crecimiento durante el periodo 2 y así sucesivamente
// Es adecuada para calcular variables en procentajes o índices. Una de sus principales ventajas es que es menos sensible a valores extremos que podrian alterar la media de una muestra estadistica.

//Ejemplo
    //Supongamos los resultados de una empresa.La empresa ha generado un 20% de rentabilidad el primer año, un 15% el segundo año, un 33% el tercer año y un 25% el cuarto año. Lo facil en este caso sería sumar las cantidades y dividir entre cuatro. Sin embargo esto no es correcto.
        //Utilizamos el factor de crecimiento para los porcentajes.
            // FC = 1 + (ti/100)
        //Para calcular la media de varios porcentajes debemos hacer uso dela media geométrica.
        //Aplicado al caso anterior tendriamos lo siguiente
            // FC = 1 + (20/100) = 1.20
            // FC = 1 + (15/100) = 1.15
            // FC = 1 + (33/100) = 1.33
            // FC = 1 + (25/100) = 1.25

            // Media geométrica = 4 √ 1,20 * 1,15 * 1,33 * 1,25;
                //MG = 4 √ 2.29425
                    //MG = 1.23
            // 1.23 expresado en porcentaje es igual a 23%, es decir que en promedio, cada año la empresa ha ganado un 23%.
            //NOTA: Si las rentabilidades son negativas, no se pondrían numero negativos. Si la rentabilidad es del -20% el número a multiplicar sería de 0.80. Si la rentabilidad es del -5%, el número a multiplicar sería 0.95. En conclusion si las rentabilidades son negativas a 1 le restamos el porcentaje en tanto por uno.

            //En caso de ser negativa, FC = 1 - (ti/100)
                //-5% FC = 1 - (5/100) = 0.95.
                //2.128896

const calcularMediaGeometrica = (lista) => {
    const factorCrecimiennto = lista.map((numero) => {
        return numero / 100 + 1 
    });
    const productoPorcentajes = factorCrecimiennto.reduce((valorActual=0, acumulador) => {
        return valorActual * acumulador;
    });
    const mediaGeometrica = (productoPorcentajes**(1/factorCrecimiennto.length)).toFixed(2);
    const result = Math.floor((mediaGeometrica - 1) * 100);
    console.log(`La media geometrica es igual ${mediaGeometrica} lo que expresado en porcentaje sería ${result}%`);
}
calcularMediaGeometrica([20,15,33,25]);
