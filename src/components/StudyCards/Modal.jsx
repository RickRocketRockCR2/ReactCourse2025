import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

function Modal({ children }) {
    const navigate = useNavigate();

    const closeHandler = () => {
        navigate('..'); /* navigate back to the previous page as command line works, but you can also set a another route like '/about' */
    };

   return (
      <>
          <div className={classes.backdrop} onClick={closeHandler} /> {/* by clicking this element, the modal will close. Using onClick event to send prop to set the modal visible as false */}
          <dialog open={true} className={classes.modal} >
            {children}
          </dialog>
      </>
    )
}

export default Modal;