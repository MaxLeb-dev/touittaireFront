import styles from '../styles/Login.module.css'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Resizer from './Resizer'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

function Login() {

    const user = useSelector((state) => state.user.value);

    const router = useRouter()
    if (user.token) {
        router.push('/')
    }

    const [signUpOpenModal, setSignUpOpenModal] = useState(false)
    const [signInOpenModal, setSignInOpenModal] = useState(false)

    return (
        <div className={styles.main}>
            <div className={styles.leftSide} />
            <div className={styles.rightSide}>
                <h2 className={styles.title}>See what's <br /> happening</h2>
                <h3 className={styles.subtitle}>Join Touittaire today</h3>
                <div className={styles.signUp} onClick={() => setSignUpOpenModal(!signUpOpenModal)}>Sign Up</div>
                <h4 className={styles.h4}>Already have an account ?</h4>
                <div className={styles.signIn} onClick={() => setSignInOpenModal(!signInOpenModal)}>Sign In</div>
            </div>
            {signUpOpenModal && <SignUp closeModal={setSignUpOpenModal} title={"Create your Touittaire account"} button={"Sign up"} />}
            {signInOpenModal && <SignIn closeModal={setSignInOpenModal} title={"Connect to Touittaire"} button={"Sign in"} />}
        </div>
    );
};

export default Login;