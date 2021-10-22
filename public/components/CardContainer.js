import { Card } from './Card.js';
export class CardContainer {
    constructor(container) {
        this.container = container;
    }
    render(items) {
        // console.log("ITEMS");
        // console.log(items);
        const cardContainer = document.createElement('div');
        cardContainer.classList.add("card-container", 'animate-bottom');
        items.forEach(item => {
            let card = new Card(item);
            const div = card.createCard();
            cardContainer.append(div);
        });
        this.container.append(cardContainer);
    }
}
