import { cardOnClick } from '../plugin/utils.js';
import { MovieData } from "../interfaces/MovieData";

export class Card {
  constructor(private data: MovieData){}

  createCard() {
    const div = document.createElement('div');
    div.id = this.data.id.toString();
    div.addEventListener("click", cardOnClick);

    const h1 = document.createElement('h1');
    h1.innerText = this.data.title;
    div.append(h1);

    const img = document.createElement('img');
    img.src = this.data.imgUrl;
    div.append(img);

    const p = document.createElement('p');
    p.innerText = this.data.desc;
    div.append(p);

    div.classList.add("card");
    return div;
  }
}