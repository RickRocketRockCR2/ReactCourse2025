import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from './MainHeader.module.css';

function MainHeader({ onCreateCard }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        Study Cards App
      </h1>
      <p>
        <button className={classes.button} onClick={onCreateCard}>
          <MdPostAdd size={18} />
          Add New Card
        </button>
      </p>
    </header>
  );
}

export default MainHeader;