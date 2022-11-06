import styles from '../styles/Modal.module.css'
import { IoClose } from 'react-icons/io5'

const SignIn = (props) => {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src="/logo.png" alt="logo" />
            <IoClose className={styles.closer} onClick={() => props.closeModal(false)} />
            <div className={styles.title}>
                <h2>{props.title}</h2>
            </div>
            <div className={styles.inputContainer}>
                <input className={styles.input} required name='Username' placeholder='Username' type='text'></input>
                <input className={styles.input} required name='Password' placeholder='Password' type='text'></input>
            </div>
            <div className={styles.footer}>
                <button>{props.button}</button>
            </div>
        </div>
    );
};

export default SignIn;