import { useLoaderData, Link } from 'react-router-dom';

import Modal from '../components/StudyCards/Modal';
import classes from './CardDetails.module.css';

function CardDetails() {
  const card = useLoaderData(); // useLoaderData hook to access the data returned by the loader function defined in the route configuration

  if (!card) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find card</h1>
          <p>Unfortunately, the requested card could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.title}>{card.title}</p>
        <p className={classes.backText}>{card.backText}</p>
      </main>
    </Modal>
  );
}

export default CardDetails;

export async function loader({ params }) {
  const cardId = params.id;
  console.log(cardId);
  const response = await fetch(`https://dummy-backend-cha4dtgmgab3awet.eastus-01.azurewebsites.net/posts/${cardId}`);
  if (!response.ok) {
    throw new Response('Could not fetch card details', { status: 500 });
  }

  const card = await response.json();
  return card.post;
}
