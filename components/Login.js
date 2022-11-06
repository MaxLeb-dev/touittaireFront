// import "antd/dist/antd.css";
import styles from '../styles/Login.module.css'
import Modal from './Modal';
import { useState } from 'react'

const Login = () => {
    const [signUpOpenModal, setSignUpOpenModal] = useState(false)
    const [signInOpenModal, setSignInOpenModal] = useState(false)
 
    console.log("up modal", signUpOpenModal);
    console.log("in modal", signInOpenModal);
    
    return (
        <div className={styles.main}>
            <div className={styles.leftSide}/>
            <div className={styles.rightSide}>
                <h2 className={styles.title}>See what's <br /> happening</h2>
                <h3 className={styles.subtitle}>Join Touittaire today</h3>
                <div className={styles.signUp} onClick={() => setSignUpOpenModal(!signUpOpenModal)} >Sign Up</div>
                <h4 className={styles.h4}>Already have an account ?</h4>
                <div className={styles.signIn} onClick={() => setSignInOpenModal(!signInOpenModal)}>Sign In</div>
            </div>
            {/* <Modal open={signUpOpenModal} onCancel={() => setSignUpOpenModal(false)} footer={null} className={styles.modal}>
                <p>caca</p>
            </Modal>
            <Modal open={signInOpenModal} onCancel={() => setSignInOpenModal(false)} footer={null} className={styles.modal}>
                <p>boudin</p>
            </Modal> */}
            {signUpOpenModal && <Modal closeModal={setSignUpOpenModal} title={"Create your Touittaire account"} text={"asticot"} button={"Sign up"}/>}
        </div>
    );
};

export default Login;