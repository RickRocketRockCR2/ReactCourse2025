import classes from './Modal.module.css';

function Modal({ children, onClose }) { // props or you can specify {children} by using object destructuring
   return (
      <>
          <div className={classes.backdrop} onClick={onClose} /> {/* by clicking this element, the modal will close. Using onClick event to send prop to set the modal visible as false */}
          <dialog open={true} className={classes.modal} >{children}</dialog>
      </>
    )
}

export default Modal;