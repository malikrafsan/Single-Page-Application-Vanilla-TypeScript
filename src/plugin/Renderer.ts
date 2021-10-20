import { MovieData } from '../interfaces/MovieData.js';
import { CardContainer } from "../components/CardContainer.js";
import { Filter } from '../components/Filter.js';

export class Renderer {
  constructor(private app: HTMLDivElement) {}

  setAllRendererNull() {
    let body = document.getElementById('body-page') as HTMLDivElement;
    body.innerHTML = '';
  }
  renderHome(data: MovieData[]) {
    this.setAllRendererNull();
    const filter = new Filter(this.app);
    filter.render();
    const cardContainer = new CardContainer(this.app);
    cardContainer.render(data);
  }
  renderDetailMovie(id: string) {
    this.setAllRendererNull();
    console.log("rendering: page-" + id);
    const h1 = document.createElement('h1');
    h1.innerText = "PAGE-" + id;
    this.app.append(h1);
  }
  renderOnPageLoadUrlChange(data: MovieData[]) {
    const currentPath = location.hash.substr(1);

    if (currentPath === '') {
      this.renderHome(data);
      // console.log("rendering home page...");
      // console.log(data);
    } else if (currentPath.substring(0,7) === 'details') {
      this.renderDetailMovie(currentPath[currentPath.length-1]);
    } else {
      const h1 = document.createElement('h1');
      h1.innerText = "Wrong path";
      this.app.append(h1);
    }
  }
}
