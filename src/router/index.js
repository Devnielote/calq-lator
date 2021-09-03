import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Home from '../pages/Home';
import Figuras from '../pages/Figuras';
import Descuentos from '../pages/Descuentos';
import Media from '../pages/Media';
import Salario from '../pages/Salario';
import Capacidad from '../pages/Capacidad';
import getHash from '../utils/getHash';
import resolveRoute from '../utils/resolveRoute';

const routes = {
    '/': Home,
    'formas': Figuras,
    'descuentos': Descuentos,
    'media': Media,
    'salario': Salario,
    'capacidad': Capacidad,
}

const router = async () => { 
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    const footer = null || document.getElementById('footer')

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoute(hash);
    let render = routes[route] ? routes[route] : Home;
    content.innerHTML = await render();
    footer.innerHTML = await Footer();
    
}

export default router;