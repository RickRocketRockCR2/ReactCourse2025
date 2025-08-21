import Card from './Card';
import NewCard from './NewCard';
import Modal from './Modal';
import classes from './CardList.module.css'; 
import { useEffect, useState } from 'react';

function CardList({ postingCard, onStopPostingCard }) { /* props are starting with "on" when they are functions */ 
    let modalContent;
    const [idCardsCounter, setIdCardsCounter] = useState(1); // Initialize a counter for unique IDs
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchCards() { // Fetch wrapped in a function as trick to use async/await as useEffect cannot return a promise
            setIsLoading(true);
            const response = await fetch('http://localhost:8080/posts');
            const data = await response.json();
            setCards(data.posts);
            setIsLoading(false);
        };

        fetchCards();
    }, []); // Array empty to indicate that this effect runs only once after the initial component render

    const addCardHandler = (cardData) => {
        const newCard = {
           ...cardData,
           id: idCardsCounter,
        };
        fetch('http://localhost:8080/posts',{
          method: 'POST',
          body: JSON.stringify(newCard),
          headers: {
            'Content-Type': 'application/json',
          },
        })
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
      {!isLoading && cards.length > 0 && (
        <ul className={classes.cards}>
          {cards.map((card) => (
            <Card key={card.id} title={card.title} backText={card.backText} />
           ))
          }
        </ul>
      )}
      {!isLoading && cards.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>No study cards available.</h2>
          <p>Please add a new study card.</p>
        </div>
      )}
      {isLoading && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>Loading cards...</h2>
        </div>
      )}
    </>
  )
}

export default CardList


