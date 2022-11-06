import { useState } from 'react'
import styles from '../styles/Modal.module.css'
import { IoClose } from 'react-icons/io5'
import Link from "next/link"

const SignUp = (props) => {
    const [firstName, setFirstName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {

    }

    return (
        <div className={styles.container}>
            <img src="/logo.png" alt="logo" className={styles.logo} />
            <IoClose className={styles.closer} onClick={() => props.closeModal(false)} />
            <div className={styles.title}>
                <h2>{props.title}</h2>
            </div>
            <div className={styles.inputContainer}>
                <input className={styles.input} required name='FirstName' placeholder='Firstname' type='text' onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                <input className={styles.input} required name='Username' placeholder='Username' type='text' onChange={(e) => setUserName(e.target.value)} value={userName} />
                <input className={styles.input} required name='Password' placeholder='Password' type='text' onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <div className={styles.footer}>
                <button onClick={() => handleSubmit()}>{props.button}</button>
                <Link href="/">Go Home Kid</Link>
            </div>
        </div>
    );
};

export default SignUp;