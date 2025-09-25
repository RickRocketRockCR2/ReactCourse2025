import { Link } from 'react-router-dom';
import { MdPostAdd, MdMessage } from 'react-icons/md';
import { useSelector } from 'react-redux';

import classes from './MainHeader.module.css';

function MainHeader() {

  const counter = useSelector((state) => state.count); // Extracting the count value from the Redux store state 

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <Link to="/" className={classes.logoLink}>
          <MdMessage />
          Study Cards App
        </Link>
      </h1>
      <div className={classes.buttonCounterContainer}>
        <Link to="/create-card" className={classes.button} >
          <MdPostAdd size={18} />
          Add New Card
        </Link>
        <span>Add New Card attempts: {counter}</span>
      </div>
    </header>
  );
}

export default MainHeader;