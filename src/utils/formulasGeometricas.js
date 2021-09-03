// Fórmulas para el cuadrado

const perimetroCuadrado = (lado) => {
    return lado * 4;
};
const areaCuadrado = (lado) => {
return lado * lado
}

//Interaccion del cuadrado con el DOM
const calcularPerimetroCuadrado = () => {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const sqrResults = document.getElementById("sqr__results");
    const resultsErr = document.getElementById("sqr__errors")

    const perimetro = perimetroCuadrado(value);

    //Muestra de resultados
    if (value.length >= 1) {
        resultsErr.style.display = "none";
        sqrResults.style.display = "block";
        sqrResults.innerText = `Perímetro de: ${perimetro}cm`;
    } else {
        sqrResults.style.display = "none";
        resultsErr.style.display = "block";
        resultsErr.style.color = "red";
        resultsErr.innerText = 'Ingresa el valor requerido';
    }
};

const calcularAreaCuadrado = () => {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const sqrResults = document.getElementById("sqr__results");
    const resultsErr = document.getElementById("sqr__errors")

    const area = areaCuadrado(value);
    //Muestra de resultados
    if(value.length >=1) {
        resultsErr.style.display = "none";
        sqrResults.style.display = "block";
        sqrResults.innerText = `Área de: ${area}cm²`;
    } else {
        sqrResults.style.display = "none";
        resultsErr.style.display = "block";
        resultsErr.style.color = "red";
        resultsErr.innerText = 'Ingresa el valor requerido';
    }
};




//<---------- --------->//


// Fórmulas para el triángulo
const perimetroTriangulo = (lado1,lado2,base) => {
    const result = lado1 + lado2 + base;
    return result;
};

const areaTriangulo = (base, altura) => {
    return (base * altura) / 2
};

// Interacción del triángulo con el DOM

const calcularPerimetroTriangulo = () => {
    const angulo1 = document.getElementById("lado1");
    const primerLado = Number(angulo1.value); 
    const angulo2 = document.getElementById("lado2");
    const segundoLado = Number(angulo2.value);
    const baseTriangulo = document.getElementById("base");
    const base = Number(baseTriangulo.value); 
    const trgResults = document.getElementById("trg__results");
    const trgErrors = document.getElementById("trg__errors");
    
    //Muestra de resultados
    if(angulo1 && base && angulo2 ){
        const perimetro = perimetroTriangulo(primerLado,segundoLado,base);
        trgErrors.style.display = "none";
        trgResults.style.display = "block";
        trgResults.innerText = `Perímetro de: ${perimetro}cm`;
    } else {
        trgResults.style.display = "none";
        trgErrors.style.display = "block";
        trgErrors.style.color = "red";
        trgErrors.innerText = "Introduce los valores de los lados y la base";
    }
};


const calcularAreaTriangulo = () => {
    const baseTriangulo = document.getElementById("base");
    const base = Number(baseTriangulo.value);
    const alturaTriangulo = document.getElementById("alturaTriangulo");
    const altura = Number(alturaTriangulo.value);
    const area = areaTriangulo(base,altura);
    const trgResults = document.getElementById("trg__results");
    const trgErrors = document.getElementById("trg__errors");
    //Muestra de resultados
    if(base && altura) {
        trgErrors.style.display = "none";;
        trgResults.style.display = "block";
        trgResults.innerText = `Área de: ${parseInt(area)}cm²`;
    } else {
        trgResults.style.display = "none";
        trgErrors.style.display = "block";
        trgErrors.style.color = "red";
        trgErrors.innerText = "Ingresa la base y altura de tu triángulo";
    }
};

// const teoremaPitagoras = (lado1,lado2,base) => {
//     if(lado1 === lado2 && base !== lado1) {
//         const c2 = lado1 * lado1;
//         const h = base / 2;
//         const c1 = c2 - (h * h)
//         const altura = Math.sqrt(c1);
//         return altura;
//     } else
//         return alert("Introduce datos validos")
// }

// const calcularAlturaIsosceles = () => {
//     const angulo1 = document.getElementById("lado1");
//     const angulo2 = document.getElementById("lado2")
//     const lado1 = Number(angulo1.value);
//     const lado2 = Number(angulo2.value);
//     const c2 = document.getElementById("base");
//     const base = Number(c2.value);
    
//     const altura = teoremaPitagoras(lado1,lado2,base);
//     alert(parseInt(altura));
// }

const calcularAlturaIsoscelesDos = () => {
    const angulo1 = document.getElementById("lado1");
    const angulo2 = document.getElementById("lado2");
    const lado1 = Number(angulo1.value);
    const lado2 = Number(angulo2.value);
    const c2 = document.getElementById("base");
    const base = Number(c2.value);
    const trgResults = document.getElementById("trg__results");
    const trgErrors = document.getElementById("trg__errors");
    if(lado1 === lado2 && base !== lado1){
        trgErrors.style.display = "none";
        trgResults.style.display = "block";
        const altura = Math.sqrt((lado1 * lado1) - ((base / 2) * 2));
        //Muestra de resultados
        trgResults.innerText = `Altura de: ${parseInt(altura)}cm`;
    } else {
        trgResults.style.display = "none";
        trgErrors.style.display = "block";
        trgErrors.style.color = "red";
        trgErrors.innerText = "Ingresa las medidas correspondientes a un triángulo ísosceles";
    }
};

//Formula para calcular la altura de un triangulo isósceles.
//Consiste en dividir la base de un triangulo entre 2 para obtener un triangulo rectangulo y aplicar el teorema de pitagoras
 //Base triangulo / 2
 // Te quedas con un los cm de un lado del triangulo.
 //La altura a calcular será igual al cateto 1 y la hipotenusa será los cm del lado ya establecido
// altura = c1 (cateto1) base = c2 (cateto2) h = cm del lado seleccionado
//Primero c1^2 + c2^2 = h^2
//Despues tenemos que desahcernos del c2 para que quede el c1 solo --> c1^2=h - c2 = ?
// Entonces si el c1 es igual h - c2 entonces el cateto 1 es igual a la raiz cuadrado de la resta de la hipotenusa menos el cateto 2 --> c1 = √ h - c2 = c1


//<--------- --------->//


//Fórmulas para el círculo
const PI = Math.PI;

//Interacción del círculo con el DOM

const calcularDiametroCirculo = () => {
    const radio = document.getElementById("RadioCirculo").value;
    const circResults = document.getElementById("crq__results");
    const circErrors = document.getElementById("crq__errors");
    

    //Muestra de resultados en el DOM
    if(radio){
        diametro = radio * 2;
        circResults.style.display = "block";
        circErrors.style.display= "none";
        circResults.innerText = `Diámetro de: ${diametro}cm`;
    }else {
        circResults.style.display = "none";
        circErrors.style.display = "block";
        circErrors.style.color = "red";
        circErrors.innerText = "Ingresa el valor requerido";
    }
};

const calcularPerimetroCirculo = () => {
    const radio = document.getElementById("RadioCirculo").value;
    const circResults = document.getElementById("crq__results");
    const circErrors = document.getElementById("crq__errors");
   //Muestra de resultados en el DOM
   if(radio){
        const perimetro = radio * PI * radio;
        const result = Number(perimetro);
        circErrors.style.display = "none";
        circResults.style.display = "block";
        return circResults.innerText = `Perímetro de: ${result.toFixed(2)}cm`;
   } else {
        circErrors.style.display = "block";
        circResults.style.display = "none";
        circErrors.style.color = "red";
        circErrors.innerText = "Ingresa el valor requerido";
   }
};

const calcularAreaCirculo = () => {
    const radio = document.getElementById("RadioCirculo").value;
    const circResults = document.getElementById("crq__results");
    const circErrors = document.getElementById("crq__errors");
    //Muestra de resultados en el DOM
    if(radio){
        const area = radio * radio * PI;
        circErrors.style.display = "none";
        circResults.style.display = "block";
        return circResults.innerText = `Área de ${area.toFixed(2)}cm²`;

    }else {
        circErrors.style.display = "block";
        circResults.style.display = "none";
        circErrors.style.color = "red";
        circErrors.innerText = "Ingresa el valor requerido";
    }
};

//<---------- ----------->//
