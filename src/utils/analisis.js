//Utils
const sortedSalaries = (pais) => {
    const salary = pais.map((persona) => persona.salary);
    const order = salary.sort((num1,num2) => num1 - num2);
    return order;
}
//Calculador de mediana general
const calcularMedianaSalarios = (pais) => {
    //Hacemos map de los datos para obtener solo el salario de cada persona
    const salarios = pais.map((persona) => persona.salary)
    medianaSalarial = calcularMediana(salarios);
    return medianaSalarial;
}
calcularMedianaSalarios(colombia);

//Calculadora del top 10% de salarios
const spliceStart = (sortedSalaries(colombia).length * 90) / 100;
const spliceCount = sortedSalaries(colombia).length - spliceStart;

const salariosTop10 = sortedSalaries(colombia).splice(
    spliceStart,
    spliceCount,
); 
const medianaTop10 = calcularMediana(salariosTop10);
