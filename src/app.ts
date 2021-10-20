import { Navbar } from './components/Navbar.js';
import { Renderer } from './plugin/Renderer.js';
import { Footer } from './components/Footer.js';
import { getData, filterData } from './plugin/utils.js';

window.addEventListener('popstate', () => {
  filteredData.then(data => module.renderOnPageLoadUrlChange(data));
})

window.onload = () => {
  filteredData.then(data => module.renderOnPageLoadUrlChange(data));
}

const navbarSelector = document.querySelector('#navbar') as HTMLDivElement;
const navbar = new Navbar(navbarSelector);
navbar.render();

const body = document.querySelector('#body-page') as HTMLDivElement;
const module = new Renderer(body);
const data = getData();
const filteredData = data.then(data => filterData(data));
filteredData.then(data => module.renderOnPageLoadUrlChange(data));

const footerSelector = document.querySelector('#footer') as HTMLDivElement;
const footer = new Footer(footerSelector);
footer.render();