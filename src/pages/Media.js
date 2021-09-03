const Media = () => {
    const view = `
    <main class="container">
        <header class="header">
            <div class="header__container">
                <div class="header__title">
                    <h2>Taller práctico no.3</h2>
                </div>
                <div class="header__subtitle">
                    <h2>Mediana, promedio y moda</h2>
                </div>
            </div>
        </header>
        <div class="wrapper">
            <section class="soloBox __container">
                    <div class="form__container">
                        <h3>Calculo de mediana, media o moda</h3>
                        <form action="">
                            <label for="InputLista">Lista de valores:</label>
                            <input type="text" id="InputLista" placeholder="150, 350, 870" minlength="2">
                            <div class="input__button">
                                <button type="button" onclick="calcularMediana()">Calcular mediana</button>
                            </div>
                            <div class="input__button">
                                <button type="button" onclick="calcularMediaAritmetica()">Calcular promedio</button>
                            </div>
                            <div class="input__button">
                                <button type="button" onclick="calcularModa()">Calcular moda</button>
                            </div>
                        </form>
                        <div class="results__container">
                            <div class="results--align">
                                <span id="results"></span>
                            </div>
                            <span id="media__errors"></span>
                        </div>
                    </div>
            </section>
        </div>
    </main>
    `
    return view;
};

export default Media;