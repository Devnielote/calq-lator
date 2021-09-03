
const Home = async () => {
    const view = `
    <section class="home">
        <div class="home__sections intro">
            <h1>Desde el área de un círculo, hasta tu capacidad de endeudamiento</h1>
        </div>
        <div class="linkArea">
            <h2>Te tenemos cubierto</h2>
            <h2>Haz click sobre lo que quieres calcular</h2>
        </div>
        <div class="home__sections links">
            <div class="link">
                <a href="#/formas">
                <figure class="figura">
                </figure>
                Figuras geométricas
                </a>
            </div>
            <div class="link">
                <a href="#/descuentos">
                <figure class="descuento">
                </figure>
                Descuentos
                </a>
            </div>
            <div class="link">
                <a href="#/media">
                <figure class="moda">
                </figure>
                Media, Promedio y Moda
                </a>
            </div>
            <div class="link">
                <a href="#/salario">
                <figure class="salario">
                </figure>
                Media Salarial
                </a>
            </div>
            <div class="link">
                <a href="#/capacidad">
                <figure class="capacidad">
                </figure>
                Capacidad de Endeudamiento
                </a>
            </div>
        </div>
    </section> `;
    return view
}

export default Home;
