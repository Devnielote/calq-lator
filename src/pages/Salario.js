const Salario = () => {
    const view = `
    <main class="container">
        <header class="header">
            <div class="header__container">
                <div class="header__title">
                    <h2>Taller práctico no.4</h2>
                </div>
                <div class="header__subtitle">
                    <h2>Analísis salarial</h2>
                </div>
            </div>
        </header>
        <div class="wrapper">
            <section class="soloBox __container">
                <div class="form__container">
                    <h3>Media salarial y top 10%</h3>
                    <form action="">
                        <label for="InputPrecio">Salarios a calcular:</label>
                        <input type="text" id="InputSalarios" placeholder="800,1000,1200,1800">
                        <div class="input__button">
                            <button type="button" onclick="calcularMedianaSalarios()">Calcular media salarial</button>
                        </div>
                        <div class="input__button">
                            <button type="button" onclick="calcularTop10()">Calcular top 10%</button>
                        </div>
                    </form>
                    <div class="results__container">
                        <span id="results"></span>
                        <span id="err"></span>
                    </div>
                </div>
            </section>
        </div>
    </main>
    `;
    return view;
}

export default Salario;