import { Link } from 'react-router-dom';
import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <Link to="/" className={classes.logoLink}>
          <MdMessage />
          Study Cards App
        </Link>
      </h1>
      <p>
        <Link to="/create-card" className={classes.button} >
          <MdPostAdd size={18} />
          Add New Card
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;