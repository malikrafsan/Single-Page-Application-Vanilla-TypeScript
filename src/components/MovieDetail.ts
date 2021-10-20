import { MovieData } from '../interfaces/MovieData.js';

export class MovieDetail {
  constructor(
    private container: HTMLDivElement
  ){}

  render(item: MovieData) {
    const div = document.createElement('div');
    div.classList.add('movie-detail', 'animate-left');
    
    const rightCon = document.createElement('div');
    rightCon.classList.add('right');
    const h1 = document.createElement('h1');
    h1.innerText = item.title;
    // rightCon.append(h1);
    div.append(h1);

    const content = document.createElement('div');
    content.classList.add('content');
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    const img = document.createElement('img');
    img.src = item.imgUrl;
    img.alt = "Poster of " + item.title;
    imgContainer.append(img);
    // rightCon.append(imgContainer);
    // div.append(rightCon);
    content.append(imgContainer);

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container','left');

    const p = document.createElement('p');
    const span = document.createElement('span');
    span.innerText = "Release date:";
    span.classList.add('info-poin');
    p.append(span);
    p.append(" " + item.date);
    infoContainer.append(p);

    const p1 = document.createElement('p');
    const span1 = document.createElement('span');
    span1.innerText = "Director:";
    span1.classList.add('info-poin');
    p1.append(span1);
    p1.append(" " + item.director);
    infoContainer.append(p1);
    
    const p2 = document.createElement('p');
    const span2 = document.createElement('span');
    span2.innerText = "Description:";
    span2.classList.add('info-poin');
    p2.append(span2);
    p2.append(" " + item.reason);
    infoContainer.append(p2);

    content.append(infoContainer);
    div.append(content);
    this.container.append(div);
  }
}