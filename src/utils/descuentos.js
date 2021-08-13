// Formula para calcular descuentos
//     [Precio * (100 - Descuento)] / 100

//Array de los cupones

const coupons = [
    {
        name:'Cupon 1',
        discount: 100
    },

    {
        name:'Cupon 2',
        discount: 200
    },

    {
        name:'Cupon 3',
        discount: 300
    }
]


const calculoDescuento = (precio,descuento) => {
    const valor = Number(precio);
    const porcentaje = Number(descuento);
    const total = valor * (100 - porcentaje) / 100;
    return total;
}

const porcentajeInicial = (precio,porcentaje) => {
    const total = (precio * porcentaje) / 100;
    return total;
}


const calcularDescuento = () => {
    //Primero guardamos los valores dados en el formulario.
    const productValue = document.getElementById('InputPrecio');
    const precio = Number(productValue.value);
    const productDiscount = document.getElementById('InputDescuento');
    const descuento = Number(productDiscount.value);
    const productCoupon = document.getElementById('InputCupon');
    const couponValue = productCoupon.value;
    const validarCupon = (coupons) => {
        return coupons.name === couponValue; //Por si sola esta función no recorre el array de coupons.
    }
    
    //Se ejecuta el proceso de calculo de descuentos.
    const dineroAhorrado = Math.round(porcentajeInicial(precio,descuento));
    const descuentoTotal = Math.round(calculoDescuento(precio,descuento));
    const userCoupon = coupons.find(validarCupon); //La funcion userCoupon utiliza el metodo find sobre el array coupons haciendo uso de la funcion validarCupon para indicar que en el momento en que se encuentre un elemento con el mismo valor que coupons.name, se cumplira la funcion de este.
    if(!userCoupon){ //<-- Aqui indicamos que si funciona entonces ejecute una alerta.
        alert('El cupon no es valido')
    } else {
        var descuentoCupon = userCoupon.discount; //Dado el caso que encuentre una coincidencia, se accede elemento discount de ese objeto.
    }
    

    //Aqui actualizamos la caja del producto con el precio establecido, su descuento y la cantidad ahorrada.
    const productPrice = document.getElementById('productPrice')
    productPrice.innerText = `Costo: $${precio}`;

    const totalDiscount = document.getElementById('afterDiscount');
    totalDiscount.innerText = `Total: $${descuentoTotal - descuentoCupon}`;

    const moneySaved = document.getElementById('moneySaved');
    moneySaved.innerText = `Usted ha ahorrado: $${dineroAhorrado + descuentoCupon}`;
}


