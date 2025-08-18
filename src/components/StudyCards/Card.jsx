import classes from './Card.module.css';

function Card(props) {
  return (
    <li className={classes.card}>
      <p className={classes.title}>{props.title}</p>
      <p className={classes.backText}>{props.backText}</p>
    </li>
  );
}

export default Card;