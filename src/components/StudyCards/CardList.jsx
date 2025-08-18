import Card from './Card';
import NewCard from './NewCard';
import Modal from './Modal';
import { useState } from 'react';
import classes from './CardList.module.css'; 

function CardList({ postingCard, onStopPostingCard }) { /* props are starting with "on" when they are functions */ 
    const [title, setTitle] = useState('');
    const [backText, setBackText] = useState('');
    let modalContent;

    const onTitleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const onBackTextChangeHandler = (event) => {
        setBackText(event.target.value);
    };

    if (postingCard) {
        modalContent = (
          <Modal onClose={onStopPostingCard}>
            <NewCard onTitleChange={onTitleChangeHandler} onBackTextChange={onBackTextChangeHandler} onCancel={onStopPostingCard} />
          </Modal>
        );
    }

  return (
    <>
      {modalContent}
      <ul className={classes.cards}>
        <Card title={title} backText={backText} />
        <Card title="Manuel" backText="Check out the full course!" />
      </ul>
    </>
  )
}

export default CardList


