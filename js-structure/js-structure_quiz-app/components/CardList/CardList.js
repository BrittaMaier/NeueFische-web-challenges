import Card from "../Card/Card.js";
import { cards } from "../Card/Card.js";
const Card = Card();
export default function CardList(Card) {
  const cardList = document.createElement("section");
  cardList.classList.add("card-list");

  cards.forEach((card) => {
    const cardElement = Card(card);
    cardList.append(cardElement);
  });

  return cardList;
}
