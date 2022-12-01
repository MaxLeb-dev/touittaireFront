import styles from '../styles/Home.module.css'
import LastTouit from './LastTouit'
import Trends from './Trends'
import Resizer from './Resizer'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../reducers/user'
import { addTouit, loadTouit } from '../reducers/touit'
import { useRouter } from 'next/router'

function Home() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value)

    // '/login' redirection if not logged in
    const router = useRouter();
    if (!user.token) {
        router.push('/login');
    }

    const [newTouit, setNewTouit] = useState('')

    useEffect(() => {
        if (!user.token) {
            return
        }
        fetch(`http://localhost:3000/touits/all/${user.token}`)
            .then(response => response.json())
            .then(data => {
                data.result && dispatch(loadTouit(data.touit))
            })
    }, [])

    const handleInput = (e) => {
        if (newTouit.length < 280 || e.nativeEvent.inputType === 'deleteContentBackward') {
            setNewTouit(e.target.value)
        }
    }

    const handleSubmit = () => {
        fetch(`http://localhost:3000/touits`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ token: user.token, content: newTouit }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    const createdTouit = { ...data.touit, author: user }
                    dispatch(addTouit(createdTouit))
                    setNewTouit('')
                }
            })
    }



    return (
        <div className={styles.main}>
            <div className={styles.leftSide}>
                <img className={styles.logo} src='/logo.png' alt='logo' />
                <div className={styles.userSection}>
                    <div>
                        <img className={styles.avatar} src='/avatar.png' alt='avatar' />
                    </div>
                    <div className={styles.userInfo}>
                        <p className={styles.firstName}>{user.firstName}</p>
                        <p className={styles.userName}>@{user.userName}</p>
                        <button className={styles.logout} onClick={() => { router.push('/login'), dispatch(logout()) }}>Logout</button>
                    </div>
                </div>
            </div>
            <div className={styles.middleSide}>
                <h2 className={styles.title}>Home</h2>
                <div className={styles.touitSection}>
                    <input className={styles.input} type='text' placeholder="What's up?" name='newTouit' onChange={(e) => handleInput(e)} value={newTouit} />
                    <div className={styles.validateTouit}>
                        <p>{newTouit.length}/280</p>
                        <button className={styles.button} onClick={() => handleSubmit()}>Touit</button>
                    </div>
                </div>
                <LastTouit />
            </div>
            <div className={styles.rightSide}>
                <h2 className={styles.title}>Trends</h2>
                <Trends/>
            </div>
        </div>
    );
};

export default Home;