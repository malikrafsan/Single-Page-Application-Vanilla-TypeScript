import { MovieData } from '../interfaces/MovieData.js';
import { Card } from './Card.js';

export class CardContainer {
  constructor(
    private container: HTMLDivElement
  ){}

  render(items: MovieData[]){
    const cardContainer = document.createElement('div');
    cardContainer.classList.add("card-container");
    items.forEach(item => {
      let card = new Card(item);
      const div = card.createCard();
      cardContainer.append(div);
    })
    this.container.append(cardContainer);
  }
}
