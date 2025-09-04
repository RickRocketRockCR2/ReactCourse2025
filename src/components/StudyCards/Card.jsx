import classes from './Card.module.css';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <li className={classes.card}>
      <Link to={props.id}> {/* Link to the card details page using the card's ID */}
        <p className={classes.title}>{props.title}</p>
        <p className={classes.backText}>{props.backText}</p>
      </Link>
    </li>
  );
}

export default Card;