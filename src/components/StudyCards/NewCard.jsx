import classes from './NewCard.module.css';

const NewCard = ({ onTitleChange, onBackTextChange, onCancel }) => {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" required onChange={onTitleChange} />
      </p>         
      <p>
        <label htmlFor="back-text">Back Text</label>
        <textarea id="back-text" required rows={3} onChange={onBackTextChange} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={ onCancel }>Cancel</button>
        <button>Add Card</button>
      </p>
    </form>
  )
}

export default NewCard

