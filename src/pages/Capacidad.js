const Capacidad = () => {
    const view = `
    <main class="container">
        <header class="header">
            <div class="header__container">
                <div class="header__title">
                    <h2>Taller práctico final</h2>
                </div>
                <div class="header__subtitle">
                    <h2>Capacidad de endeudamiento</h2>
                </div>
            </div>
        </header>
        <div class="wrapper">
            <section class="soloBox __container">
                <div class="form__container">
                    <h3>Ingresa los valores necesarios</h3>
                    <form action="">
                        <label for="InputIngresos">Tus ingresos totales</label>
                        <input type="number" id="InputIngresos" placeholder="salario, ingresos adicionales">
                        <label for="InputGastosFijos">Tus gastos fijos</label>
                        <input type="number" id="InputGastosFijos" placeholder="gas, internet, renta">
                        <label for="InputGastosVariables">Gastos variables</label>
                        <input type="number" id="InputGastosVariables" placeholder="servicios de vivienda, predial, seguros">
                        <div class="input__button">
                            <button type="button" onclick="calcularCapacidadEndeudamiento()">Calcular precio</button>
                        </div>
                    </form>
                    <div class="results__container">
                        <div class="results--align">
                            <span id="results"></span>
                            <span id="ahorro"></span>
                        </div>
                        <span id="error"></span>
                    </div>
                </div>
            </section>
        </div>
    </main>
    `
    return view;
}

export default Capacidad;