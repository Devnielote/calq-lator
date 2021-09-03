//Utils
const sortedSalaries = (lista) => {
    const order = lista.sort((num1,num2) => num1 - num2);
    return order;
}
const medianaSalarial = (lista) => {
            let medianaSalarial;
            const mitadLista = parseInt((lista.length / 2));
            const esPar = (num) => {
                if(num % 2 === 0) {
                    return true
                } else {
                    return false
                }
            }

            if(esPar(lista.length)){
                const num1 = lista[mitadLista - 1];
                const num2 = lista[mitadLista];
                const promedio = (num1 + num2) / 2;
                medianaSalarial = promedio;
                return medianaSalarial
            } else {
                mediana = lista[mitadLista];
                return mediana;
            };
};

//Calculador de mediana general
const calcularMedianaSalarios = () => {
    const listaSalarios = document.getElementById("InputSalarios").value;
    const arraySalarios = listaSalarios.split(',').map(Number);
    const salarios = sortedSalaries(arraySalarios);
    const results = document.getElementById("results");
    const errors = document.getElementById("err");
    if(arraySalarios.length >= 3){
        results.style.display = "block";
        errors.style.display = "none";
        const mediana = medianaSalarial(salarios);
        results.innerText = `Mediana salarial: ${mediana}`
    } else {
        results.style.display = "none";
        errors.style.display = "block";
        errors.style.color = "red";
        return errors.innerText = "Se requieren tres valores o mas para esta función"
    }
}

// Calculadora del top 10% de salarios


const calcularTop10 = () => {
    const listaSalarios = document.getElementById("InputSalarios").value;
    const arraySalarios = listaSalarios.split(',').map(Number);
    const salarios = sortedSalaries(arraySalarios);
    const spliceStart = (salarios.length * 90) / 100;
    const spliceCount = salarios.length - spliceStart;
    const results = document.getElementById("results");
    const errors = document.getElementById("err");
    if(arraySalarios.length >= 10){
        errors.style.display = "none";
        results.style.display = "block";
        const salariosTop10 = salarios.splice(
            spliceStart,
            spliceCount,
            ); 
        const medianaTop10 = medianaSalarial(salariosTop10);
        results.innerText = `Mediana salarial del top 10%: ${medianaTop10}`
    } else {
        errors.style.display = "block";
        errors.style.color = "red";
        results.style.display = "none";
        errors.innerText = `Se requieren diez valores o mas para esta función`
    };
 };
