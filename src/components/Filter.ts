// import { filterData } from "../plugin/utils.js";
// import { inputSearch } from "../app.js";

export class Filter {
  constructor(
    private container: HTMLDivElement,
    public value: string = ''
  ) {}

  render() {
    const div1 = document.createElement("div");
    div1.classList.add("search-box");
    
    const input = document.createElement("input");
    input.classList.add("search-bar");
    input.placeholder = "Ketik nama film di sini";
    input.onkeyup = () => {
      this.value = input.value;
      // console.log(this.value);
      // input.value = this.value;
      // console.log(this.value);
    }
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