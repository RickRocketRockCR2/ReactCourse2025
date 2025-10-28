import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_MENU } from '../../store/menuSlice';
import classes from './HamburgerMenu.module.css';

function HamburgerMenu() {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(state => state.menu.isMenuOpen); // Extracting the isMenuOpen value from the Redux store state. 'menu' for reducer name in the store (store.js) and 'isMenuOpen' for state property

  return (
    <div className={classes.hamburger} onClick={() => dispatch(TOGGLE_MENU())}>
      {/* Hamburger icon */}
      <span className={`${classes.bar} ${isMenuOpen ? classes.open : ''}`}></span>
      <span className={`${classes.bar} ${isMenuOpen ? classes.open : ''}`}></span>
      <span className={`${classes.bar} ${isMenuOpen ? classes.open : ''}`}></span>
    </div>
  );
}

export default HamburgerMenu;