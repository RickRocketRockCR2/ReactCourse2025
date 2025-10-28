import Modal from '../components/StudyCards/Modal';
import classes from './Message.module.css';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { counterActions } from '../store/counterSlice';

function Message() {
const counterAdded = useSelector((state) => state.counter.added); // Extracting the added value from the Redux store state. 'counter' for reducer name in the store (store.js) and 'added' for state property
const dispatch = useDispatch();
const hasDispatched = useRef(false);
const location = useLocation();

useEffect(() => {
  if (!hasDispatched.current) {
    if(location.pathname === '/counter1'){
      dispatch(counterActions.incrementCustomObject({ amount: 1 })); // Dispatch only once on mount
    }
    else if(location.pathname === '/counter2'){
      dispatch(counterActions.incrementCustomPayload(2)); // Dispatch only once on mount
    }
    hasDispatched.current = true;
  }
}, [dispatch, location.pathname]);

  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.title}>+{counterAdded} added to the Global Counter</p>
      </main>
    </Modal>
  );
}

export default Message;
