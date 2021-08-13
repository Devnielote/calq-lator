
// Código del cuadrado
console.group("Cuadrado");

const perimetroCuadrado = (lado) => {
    return lado * 4;
};
const areaCuadrado = (lado) => {
return lado * lado
}


// const perimetroCuadrado = ladoCuadrado * 4;
// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log(`El perimetro del cuadrado es ${perimetroCuadrado}cm y su area consta de ${areaCuadrado}cm2`)
console.groupEnd();

//Código del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = (lado1,lado2,base) => {
    return lado1 + lado2 + base;
}
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (base, altura) => {
    return (base * altura) / 2
}
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

// console.log(`La altura del triangulo es de ${alturaTriangulo} por la tanto su perimetro y area en base a los otros datos recopilados consta de ${perimetroTriangulo}cm y de ${areaTriangulo}cm2 respectivamente`)
console.log(perimetroTriangulo(10,10,15))
console.log(areaTriangulo(15,20))
console.groupEnd();

//Código del circulo
console.group("Circulos");


const diametroCirculo = (radio) => {
    return radio * 2;
}
// const diametroCirculo = radioCirculo * 2;


const perimetroCirculo = (radio) => {
    const diametro = diametroCirculo(radio);
    return Math.floor(diametro * PI); 
}
const PI = Math.PI;
// const perimetroCirculo = diametroCirculo * PI;


const areaCirculo = (radio) => {
return Math.floor((radio * radio) * PI); 
}
// const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.log(diametroCirculo(19))
console.log(perimetroCirculo(28))
console.log(areaCirculo(98))

// console.log(`Utilzando los datos recopilados acerca del circulo en cuestion, podemos determinar que su diametro es de ${diametroCirculo}cm o yo que se, su perimetro consta de ${perimetroCirculo} y su area tiene ${areaCirculo}cm`)
console.groupEnd();

//Interaccion con el html

const calcularPerimetroCuadrado = () => {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

const calcularAreaCuadrado = () => {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


const calcularPerimetroTriangulo = () => {
    const angulo1 = document.getElementById("lado1");
    const primerLado = Number(angulo1.value); 
    const angulo2 = document.getElementById("lado2");
    const segundoLado = Number(angulo2.value);
    const baseTriangulo = document.getElementById("base");
    const base = Number(baseTriangulo.value); 
    
    const perimetro = perimetroTriangulo(primerLado,segundoLado,base);
    alert(perimetro)
}

const calcularAreaTriangulo = () => {
    const baseTriangulo = document.getElementById("base");
    const base = Number(baseTriangulo.value);
    const alturaTriangulo = document.getElementById("alturaTriangulo");
    const altura = Number(alturaTriangulo.value);

    const area = areaTriangulo(base,altura);
    alert(parseInt(area))
}

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
    const angulo2 = document.getElementById("lado2")
    const lado1 = Number(angulo1.value);
    const lado2 = Number(angulo2.value);
    const c2 = document.getElementById("base");
    const base = Number(c2.value);
    if(lado1 === lado2 && base !== lado1) {
        const altura = Math.sqrt((lado1 * lado1) - ((base / 2) * 2));
        return alert(parseInt(altura));
    } else 
        return alert("Introduce datos validos")
}

//Formula para calcular la altura de un triangulo isósceles.
//Consiste en dividir la base de un triangulo entre 2 para obtener un triangulo rectangulo y aplicar el teorema de pitagoras
 //Base triangulo / 2
 // Te quedas con un los cm de un lado del triangulo.
 //La altura a calcular será igual al catete 1 y la hipotenusa será los cm del lado ya establecido
// altura = c1 (cateto1) base = c2 (cateto2) h = cm del lado seleccionado
//Primero c1^2 + c2^2 = h^2
//Despues tenemos que desahcernos del c2 para que quede el c1 solo --> c1^2=h - c2 = ?
// Entonces si el c1 es igual h - c2 entonces el cateto 1 es igual a la raiz cuadrado de la resta de la hipotenusa menos el cateto 2 --> c1 = √ h - c2 = c1


const calcularDiametroCirculo = () => {
    const radioCirculo = document.getElementById("RadioCirculo");
    const value = radioCirculo.value;
    
    diametro = diametroCirculo(value);
    alert(diametro)
}


const calcularPerimetroCirculo = () => {
    const diametroCirculo = diametro;
    const result = diametroCirculo * PI;
    alert(parseInt(result))
}

const calcularAreaCirculo = () => {
    const radio = document.getElementById("RadioCirculo");
    const value = radio.value;
    const area = value * value * PI;
    alert(parseInt(area));
}
