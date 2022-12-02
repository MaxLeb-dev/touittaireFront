import { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../reducers/user'
import styles from '../styles/SignIn.module.css'
import { IoClose } from 'react-icons/io5'

function SignIn(props) {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value)

    const router = useRouter()
    if (user.token) {
        router.push('/')
    }

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        fetch(`http://localhost:3000/users/signin`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ userName, password })
        }).then(response => response.json())
            .then(data => {
                data.result && dispatch(login({ token: data.token, firstName: data.firstName, userName: data.userName, avatar: data.avatar }))
            })
    }

    return (
        <div className={styles.background} onClick={() => props.closeModal(false)}>
            <div className={styles.container} onClick={(e)=> e.stopPropagation()}>
                <img className={styles.logo} src="/logo.png" alt="logo" />
                <IoClose className={styles.closer} onClick={() => props.closeModal(false)} />
                <div className={styles.title}>
                    <h2>{props.title}</h2>
                </div>
                <div className={styles.inputContainer}>
                    <input className={styles.input} required name='Username' placeholder='Username' type='text' onChange={(e) => setUserName(e.target.value)} value={userName}></input>
                    <input className={styles.input} required name='Password' placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)} value={password}></input>
                    <div className={styles.footer}>
                        <button onClick={() => handleSubmit()}>{props.button}</button>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default SignIn;