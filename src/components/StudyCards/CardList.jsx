import classes from './CardList.module.css'; 
import Card from './Card';
import { useLoaderData } from 'react-router-dom';

function CardList() { 
  const cards = useLoaderData(); // useLoaderData hook to access the data returned by the loader function defined in the route configuration

  return (
    <>
      {cards.length > 0 && (
        <ul className={classes.cards}>
          {cards.map((card) => (
            <Card key={card.id} id={card.id} title={card.title} backText={card.backText} />
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


