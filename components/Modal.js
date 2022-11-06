import styles from '../styles/Modal.module.css'
import { IoClose } from 'react-icons/io5'

const Modal = (props) => {

    return (
            <div className={styles.container}>
                <IoClose className={styles.closer} onClick={() => props.closeModal(false)}/>
                <div className={styles.title}>
                    <h2>{props.title}</h2>
                </div>
                <div className={styles.inputContainer}>
                <input className={styles.input} required name='FirstName' placeholder='Firstname' type='text'></input>
                <input className={styles.input} required name='FirstName' placeholder='Username' type='text'></input>
                <input className={styles.input} required name='FirstName' placeholder='Password' type='text'></input>
                </div>
                <div className={styles.footer}>
                    <button>{props.button}</button>
                </div>
            </div>
    );
};

export default Modal;