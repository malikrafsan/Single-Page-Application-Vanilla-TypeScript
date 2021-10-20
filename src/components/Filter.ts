// import { filterData } from "../plugin/utils.js";
// import { inputSearch } from "../app.js";

export class Filter {
  private countMovie: number = 15;

  constructor(
    private container: HTMLDivElement,
    public value: string = ''
  ) {}

  render() {
    const h1 = document.createElement('h1');
    h1.classList.add('home-title');
    h1.innerText = `Top ${this.countMovie} Underrated Movies`;
    this.container.append(h1);

    const div1 = document.createElement("div");
    div1.classList.add('search-box');

    const input = document.createElement("input");
    input.classList.add("search-bar");
    input.placeholder = "Type movie title here";
    div1.append(input);

    const div2 = document.createElement("div");
    div2.classList.add("icon-container");
    const img = document.createElement("img");
    img.classList.add("search-icon");
    img.src="./assets/images/search-icon.svg";
    div2.append(img);
    div1.append(div2);

    this.container.append(div1);
  }
}