import classes from './NewCard.module.css';
import Modal from '../components/StudyCards/Modal';
import { Link, Form, redirect } from 'react-router-dom';

const NewCard = () => {

  return (
    <Modal>
      <Form method="post" className={classes.form} >
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required />
        </p>
        <p>
          <label htmlFor="back-text">Back Text</label>
          <textarea id="back-text" name="backText" required rows={3} />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">Cancel</Link>
          <button>Add Card</button>
        </p>
      </Form>
  </Modal>
)

}

export default NewCard

export async function action({request}){
      const formData = await request.formData();
      const postData = Object.fromEntries(formData); // {title: '...', backText: '...'}
      
      // Fetch existing cards to determine the last ID
      const getResponse = await fetch('http://localhost:8080/posts');
      const existingData = await getResponse.json();
      const existingCards = existingData.posts || [];

      // Determine the next ID
      const lastId = existingCards.reduce((max, card) => Math.max(max, card.id || 0), 0);
      const nextId = lastId + 1;

      const newCard = {
        ...postData,
        id: nextId.toString(),
      };

      
      await fetch('http://localhost:8080/posts',{
        method: 'POST',
        body: JSON.stringify(newCard),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      return redirect('/');
}

