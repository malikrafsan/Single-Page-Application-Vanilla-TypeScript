import { Navbar } from './components/Navbar.js';
import { Renderer } from './plugin/Renderer.js';
import { Footer } from './components/Footer.js';
import { getData, filterData } from './plugin/utils.js';
window.addEventListener('popstate', () => {
    module.renderOnPageLoadUrlChange();
});
window.onload = () => {
    // module.renderOnPageLoadUrlChange();
    filteredData.then(data => module.renderOnPageLoadUrlChange());
};
const modal = document.getElementById("about-modal");
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
const navbarSelector = document.querySelector('#navbar');
const navbar = new Navbar(navbarSelector);
navbar.render();
const body = document.querySelector('#body-page');
const data = getData();
const module = new Renderer(body, data);
const filteredData = data.then(data => filterData(data, ''));
const footerSelector = document.querySelector('#footer');
const footer = new Footer(footerSelector);
footer.render();
