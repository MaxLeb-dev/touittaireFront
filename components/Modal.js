import styles from '../styles/Modal.module.css'

const Modal = (props) => {

    return (
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2 title={props.title} />
                </div>
                <div className={styles.text}></div>
                <p text={props.text} />
                <div className={styles.footer}>
                    <button button={props.button} />
                </div>
            </div>
    );
};

export default Modal;