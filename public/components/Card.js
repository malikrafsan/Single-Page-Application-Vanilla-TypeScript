import { cardOnClick } from '../plugin/utils.js';
export class Card {
    constructor(data) {
        this.data = data;
    }
    createCard() {
        const div = document.createElement('div');
        div.id = this.data.id.toString();
        div.addEventListener("click", cardOnClick);
        const h1 = document.createElement('h1');
        h1.innerText = this.data.title;
        h1.classList.add("title");
        div.append(h1);
        const divImg = document.createElement('div');
        divImg.classList.add("img-container");
        const img = document.createElement('img');
        img.src = this.data.imgUrl;
        divImg.append(img);
        div.append(divImg);
        const p1 = document.createElement('p');
        const span1 = document.createElement('span');
        span1.innerText = "Release date: ";
        span1.classList.add("sub-title");
        p1.append(span1);
        p1.append(this.data.date);
        const p2 = document.createElement('p');
        const span2 = document.createElement('span');
        span2.innerText = "Director: ";
        span2.classList.add("sub-title");
        p2.append(span2);
        p2.append(this.data.director);
        const divInfo = document.createElement('div');
        divInfo.append(p1);
        divInfo.append(p2);
        divInfo.classList.add("info-container");
        div.append(divInfo);
        div.classList.add("card-inside");
        const divAll = document.createElement('div');
        divAll.append(div);
        divAll.classList.add("card");
        return divAll;
    }
}
