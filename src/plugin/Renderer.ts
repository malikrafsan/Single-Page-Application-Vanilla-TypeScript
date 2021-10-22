import { MovieData } from '../interfaces/MovieData.js';
import { CardContainer } from "../components/CardContainer.js";
import { Filter } from '../components/Filter.js';
import { filterData } from '../plugin/utils.js';
import { MovieDetail } from '../components/MovieDetail.js';

export class Renderer {
  public currentPath: string = '';
  public filteredData: MovieData[] = [];
  public searchInput: string = '';
  private item: MovieData | undefined;

  constructor(
    private app: HTMLDivElement,
    private data: Promise<MovieData[]>) {
      data.then(data => {
        this.filteredData = filterData(data, '');
      })
      // console.log("tes1");
  }

  setAllRendererNull() {
    let body = document.getElementById('body-page') as HTMLDivElement;
    body.innerHTML = '';
  }
  async renderHome() {
    const input = document.querySelector('.search-bar') as HTMLInputElement;
    
    const div = document.createElement('div');
    div.id = "card-container";
    this.app.append(div);

    const cardContainer = new CardContainer(div);
    if (input) {
      input.onkeyup = async () => {
        this.searchInput = input.value;
        await this.data.then((data) => {
          this.filteredData = filterData(data, this.searchInput);
        })
        div.innerHTML = '';
        cardContainer.render(this.filteredData);
      }
    } 

    if (this.filteredData) {
      cardContainer.render(this.filteredData);
    } else {
      const h1 = document.createElement('h1');
      h1.innerText = "Loading...";
      this.app.append(h1);
      // console.log("loading...");
    }
  }
  getItemById(idNum: number) {
    this.data.then(data =>
      this.item = data.find(d => d.id === idNum)
    )
    // console.log(this.item);
  }
  async renderDetailMovie(id: number) {
    this.setAllRendererNull();
    await this.getItemById(id);

    if (this.item) {
      const movieDetail = new MovieDetail(this.app); 
      const itemRendered = this.item as MovieData;
      movieDetail.render(itemRendered);
    } else {
      // console.log("rendering: page-" + id);
      const h1 = document.createElement('h1');
      h1.innerText = "Loading...";
      this.app.append(h1);
    }
  }
  renderOnPageLoadUrlChange() {
    // console.log("Here1");
    this.currentPath = location.hash.substr(1);
    const path = this.currentPath.length > 1 ? 
      parseInt(this.currentPath.substr(1,this.currentPath.length-1)) :
      0;

    if (this.currentPath === '') {
      this.setAllRendererNull();
      const filter = new Filter(this.app);
      filter.render();
      this.renderHome();
    } else {
      if (this.currentPath[0] === 'c' && path > 0 && path <= this.filteredData.length) {
        this.renderDetailMovie(path);
      } else {
        this.setAllRendererNull();
        const h1 = document.createElement('h1');
        h1.innerText = "Wrong path";
        this.app.append(h1);
      }
    }
  }
}
