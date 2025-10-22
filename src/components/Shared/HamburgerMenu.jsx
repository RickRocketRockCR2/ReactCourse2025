import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './HamburgerMenu.module.css';

function HamburgerMenu() {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(state => state.menu.isMenuOpen);

  return (
    <div className={classes.hamburger} onClick={() => dispatch({ type: 'TOGGLE_MENU' })}>
      {/* Hamburger icon */}
      <span className={`${classes.bar} ${isMenuOpen ? classes.open : ''}`}></span>
      <span className={`${classes.bar} ${isMenuOpen ? classes.open : ''}`}></span>
      <span className={`${classes.bar} ${isMenuOpen ? classes.open : ''}`}></span>
    </div>
  );
}

export default HamburgerMenu;