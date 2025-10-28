import { Link } from 'react-router-dom';
import { MdPostAdd, MdMessage } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import HamburgerMenu from './HamburgerMenu';
import { CLOSE_MENU } from '../../store/menuSlice';

import classes from './MainHeader.module.css';

function MainHeader() {

  const counter = useSelector((state) => state.counter.count); // Extracting the count value from the Redux store state 
  const attempts = useSelector((state) => state.counter.attempts);
  const isMenuOpen = useSelector(state => state.menu.isMenuOpen);
  const dispatch = useDispatch();

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <Link to="/" className={classes.logoLink}>
          <MdMessage />
          Study Cards App
        </Link>
      </h1>
      <div className={classes.rightControls}>
        <div className={classes.counters}>
          <span>Attempts: {attempts}</span>
          <span>Counter: {counter}</span>
        </div>        
        <Link to="/create-card" className={classes.button}>
          <MdPostAdd size={18} />
          Add New Card
        </Link>
        <HamburgerMenu />
      {isMenuOpen && (
        <nav className={classes.hamburguerNav}>
          <Link to="/" onClick={() => dispatch(CLOSE_MENU())}>Home</Link>
          <Link to="/about" onClick={() => dispatch(CLOSE_MENU())}>About</Link>
        </nav>
      )}        
      </div> 
    </header>
  );
}

export default MainHeader;