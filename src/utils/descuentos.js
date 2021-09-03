// Formula para calcular descuentos
//     [Precio * (100 - Descuento)] / 100

//Array de los cupones

const coupons = [
    {
        name:'cupon1',
        discount: 100
    },

    {
        name:'cupon2',
        discount: 200
    },

    {
        name:'cupon3',
        discount: 300
    }
]


const calculoDescuento = (precio,descuento) => {
    const valor = Number(precio);
    const porcentaje = Number(descuento);
    const total = valor * (100 - porcentaje) / 100;
    return total;
}

const porcentajeInicial = (precio,descuento) => {
    const valor = Number(precio);
    const porcentaje = Number(descuento);
    const total = (valor * porcentaje) / 100;
    return total;
}


const calcularDescuento = () => {
    //Primero guardamos los valores del formulario.
    const precio = document.getElementById('InputPrecio').value;
    const descuento = document.getElementById('InputDescuento').value;
    const cupon = document.getElementById('InputCupon').value;
    const error = document.getElementById("discount__errors");
    //Se declara donde irán los resultados
    const productPrice = document.getElementById('productPrice')
    const totalDiscount = document.getElementById('afterDiscount');
    const moneySaved = document.getElementById('moneySaved')
    const dineroAhorrado = Math.round(porcentajeInicial(precio,descuento));
    const descuentoTotal = Math.round(calculoDescuento(precio,descuento));
    const savings = dineroAhorrado;
    const total = descuentoTotal;
    const validarCupon = (coupons) => {
        return coupons.name === cupon; //Por si sola esta función no recorre el array de coupons.
    }
    //Se ejecuta el proceso de calculo de descuentos.
    if(precio && descuento && cupon){
        const userCoupon = coupons.find(validarCupon); //La funcion userCoupon utiliza el metodo find sobre el array coupons haciendo uso de la funcion validarCupon para indicar que en el momento en que se encuentre un elemento con el mismo valor que coupons.name, se cumplira la funcion de este.
        //Validación en de cupón
        if(userCoupon){
            productPrice.style.display = "block";
            totalDiscount.style.display = "block";
            moneySaved.style.display = "block";
            error.style.display = "none";
            productPrice.innerText = `Precio: $${precio}`;
            totalDiscount.innerText = `Total a pagar: $${total - userCoupon.discount}`;
            moneySaved.innerText = `Ahorro de: $${savings + userCoupon.discount}`;
            } else {
                productPrice.style.display = "none";
                totalDiscount.style.display = "none";
                moneySaved.style.display = "none"
                error.style.display = "block";
                error.style.color = "red";
                error.innerText = 'El cupón no es válido'
            }
        } else if(precio && descuento) {
            error.style.display = "none"
            productPrice.style.display = "block";
            totalDiscount.style.display = "block";
            moneySaved.style.display = "block";
            productPrice.innerText = `Precio: $${precio}`;
            totalDiscount.innerText = `Total a pagar: $${total}`;
            moneySaved.innerText = `Ahorro de: $${savings}`;
        }else {
            productPrice.style.display = "none";
            totalDiscount.style.display = "none";
            moneySaved.style.display = "none";
            error.style.display = "block";
            error.style.color = "red";
            error.innerText = "Ingresa los valores requeridos";
        }
};


