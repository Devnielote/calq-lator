const Figuras = async () => {
    const view = `
    <main class="container">
        <header class="header">
            <div class="header__container">
                <div class="header__title">
                    <h2>Taller práctico no.1</h2>
                </div>
                <div class="header__subtitle">
                    <h2>Figuras geométricas</h2>
                </div>
            </div>
        </header>
        <div class="wrapper">
            <section class="__container">
                <div class="form__container">
                    <h3>Triángulo</h3>
                    <form action="" class="formReset">
                        <label for="angulo1">Escribe las medidas de tu triángulo isósceles:</label>
                        <input type="number" id="lado1" placeholder="Lado no.1">
                        <input type="number" id="lado2" placeholder="Lado no.2">
                        <input type="number" id="base" placeholder="Base" required>
                        <input type="number" id="alturaTriangulo" placeholder="Altura">
                        <div class="input__button">
                            <button type="button" onclick="calcularPerimetroTriangulo()">Calcular perímetro</button>
                            <button type="button" onclick="calcularAlturaIsoscelesDos()">Calcular altura</button>
                            <button type="button" onclick="calcularAreaTriangulo()">Calcular área</button>
                        </div>
                    </form>
                    <div class="results__container">
                        <span id="trg__results"></span>
                        <span id="trg__errors"  class="results__errors"></span>
                    </div>
                </div>
            </section>
            
            
            <section class="__container">
                <div class="form__container">
                    <h3>Círculo</h3>
                    <form action="" class="formReset">
                        <label for="InputCirculo">Escribe las medidas de tu círculo:</label>
                        <input type="number" id="RadioCirculo" placeholder="Radio">
                        <div class="input__button">
                            <button type="button" onclick="calcularDiametroCirculo()">Calcular diametro</button>
                            <button type="button" onclick="calcularPerimetroCirculo()">Calcular perímetro</button>
                            <button type="button" onclick="calcularAreaCirculo()">Calcular área</button>
                        </div>
                    </form>
                    <div class="results__container">
                        <span id="crq__results"></span>
                        <span id="crq__errors"  class="results__errors"></span>
                    </div>
                </div>
            </section>
            
            <section class="__container">
                <div class="form__container">
                    <h3>Cuadrado</h3>
                    <form action="" class="formReset" >
                        <label for="InputCuadrado">¿Cuánto mide un lado de tu cuadrado?</label>
                        <input type="number" id="InputCuadrado" placeholder="Lado en cm" required>
                        <div class="input__button">
                            <button type="button" onclick="calcularPerimetroCuadrado()">Calcular perímetro</button>
                            <button type="button" onclick="calcularAreaCuadrado()">Calcular área</button>
                        </div>
                    </form>
                    <div class="results__container">
                        <span id="sqr__results" class="results"></span>
                        <span id="sqr__errors"  class="results__errors"></span>
                    </div>
                </div>
            </section>
        </div>
    </main>
    `;
    return view;
};

export default Figuras;