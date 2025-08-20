import Card from './Card';
import NewCard from './NewCard';
import Modal from './Modal';
import classes from './CardList.module.css'; 
import { useState } from 'react';

function CardList({ postingCard, onStopPostingCard }) { /* props are starting with "on" when they are functions */ 
    let modalContent;
    const [idCardsCounter, setIdCardsCounter] = useState(1); // Initialize a counter for unique IDs
    const [cards, setCards] = useState([]);

    const addCardHandler = (cardData) => {
        const newCard = {
           ...cardData,
           id: idCardsCounter,
        };
        console.log('New card added:', newCard);
        setCards((prevCards) => [newCard, ...prevCards]);// This is the optimal code to set a state when the current depends on the previous state (Functional Update)
        setIdCardsCounter((prevCounter) => prevCounter + 1); // Increment the counter for the next card
    };

    if (postingCard) {
        modalContent = (
          <Modal onClose={onStopPostingCard}>
            <NewCard onCancel={onStopPostingCard} onAddCard={addCardHandler} />
          </Modal>
        );
    }

  return (
    <>
      {modalContent}
      {cards.length > 0 && (
        <ul className={classes.cards}>
          {cards.map((card) => (
            <Card key={card.id} title={card.title} backText={card.backText} />
           ))
          }
        </ul>
      )}
      {cards.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>No study cards available.</h2>
          <p>Please add a new study card.</p>
        </div>
      )}
    </>
  )
}

export default CardList


