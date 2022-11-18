import { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../reducers/user'
import styles from '../styles/Modal.module.css'
import { IoClose } from 'react-icons/io5'

function SignUp(props) {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value)

    const router = useRouter()
    if (user.token) {
        router.push('/')
    }

    const [firstName, setFirstName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        fetch(`http://localhost:3000/users/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName, userName, password })
        }).then(response => response.json())
            .then(data => {
                data.result && dispatch(login({ token: data.token, firstName, userName }))
            })
    }

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <img src="/logo.png" alt="logo" className={styles.logo} />
                <IoClose className={styles.closer} onClick={() => props.closeModal(false)} />
                <div className={styles.title}>
                    <h2>{props.title}</h2>
                </div>
                <div className={styles.inputContainer}>
                    <input className={styles.input} required name='FirstName' placeholder='Firstname' type='text' onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                    <input className={styles.input} required name='Username' placeholder='Username' type='text' onChange={(e) => setUserName(e.target.value)} value={userName} />
                    <input className={styles.input} required name='Password' placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)} value={password} />
                    <div className={styles.footer}>
                        <button onClick={() => handleSubmit()}>{props.button}</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;