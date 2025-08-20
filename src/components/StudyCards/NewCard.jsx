import { useState } from 'react';
import classes from './NewCard.module.css';

const NewCard = ({ onCancel, onAddCard }) => {
  const [title, setTitle] = useState('');
  const [backText, setBackText] = useState('');

  const onTitleChangeHandler = (event) => {
      setTitle(event.target.value);
  };

  const onBackTextChangeHandler = (event) => {
      setBackText(event.target.value);
  };  

  const SubmitHandler = (event) => {
      event.preventDefault();
      const postData = {
          title: title,
          backText: backText
      };
      onAddCard(postData);
      console.log('Card submitted:', postData);
      onCancel();
  };

  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" required onChange={onTitleChangeHandler} />
      </p>         
      <p>
        <label htmlFor="back-text">Back Text</label>
        <textarea id="back-text" required rows={3} onChange={onBackTextChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={ onCancel }>Cancel</button>
        <button>Add Card</button>
      </p>
    </form>
  )
}

export default NewCard

