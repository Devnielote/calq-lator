const Descuentos = async () => {
    const view = `
    <main class="container">
    <header class="header">
        <div class="header__container">
            <div class="header__title">
                <h2>Taller práctico no.2</h2>
            </div>
            <div class="header__subtitle">
                <h2>Calcula tus descuentos</h2>
            </div>
        </div>
    </header>
    <div class="wrapper">
        <section class="soloBox __container">
                <div class="form__container">
                    <h3>Introduce los datos necesarios</h3>
                    <form action="">
                        <label for="InputPrecio">Precio del articulo:</label>
                        <input type="number" id="InputPrecio" placeholder="$$$">
                        <label for="InputDescuento">Descuento:</label>
                        <input type="number" id="InputDescuento" placeholder="%">
                        <label for="InputCupon">Cupón de regalo:</label>
                        <select name="coupons" id="InputCupon">
                        <option value=""></option>
                        <option value="cupon1">Cupon 1</option>
                        <option value="cupon2">Cupon 2</option>
                        <option value="cupon3">Cupon 3</option>
                        </select>
                        <!-- <label for="InputCupon">Cupón de regalo:</label>
                        <input type="text" id="InputCupon" placeholder="Cupón"> -->
                        <div class="input__button">
                            <button type="button" onclick="calcularDescuento()">Calcular descuento</button>
                        </div>
                    </form>
                    <div class="results__container discount__results">
                        <div class="results--align">
                            <span id="productPrice"></span>
                            <span id="afterDiscount"></span>
                            <span id="moneySaved"></span>
                        </div>
                        <span id="discount__errors"  class="discount__errors"></span>
                    </div>
                </div>
            </section> 
    </div>
    
    
</main>
    `
    return view;
}

export default Descuentos;