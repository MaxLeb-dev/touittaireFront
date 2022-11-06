import { useState } from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home = () => {
    const [newTouit, setNewTouit] = useState('')

    const handleInputChange = (e) => {
        // if(newTouit.length < 280 || e.nativeElement )
        console.log("ici", e);
    }

    const handleSubmit = () => {

    }

    return (
        <div className={styles.main}>
            <div className={styles.leftSide}>
                <Link href='/login'>
                    <img className={styles.logo} src='/logo.png' alt='logo' />
                </Link>
                <div className={styles.userSection}>
                    <div>
                        <img className={styles.avatar} src='/avatar.png' alt='avatar' />
                    </div>
                    <div className={styles.userInfo}>
                        <p className={styles.firstName}>ZE Must</p>
                        <p className={styles.userName}>@FelonMust</p>
                        <button className={styles.logout}>Logout</button>
                    </div>
                </div>
            </div>
            <div className={styles.middleSide}>
                <h2 className={styles.title}>Home</h2>
                <div className={styles.touitSection}>
                    <input type='text' placeholder="What's up?" className={styles.input} onChange={(e) => handleInputChange(e)} value={newTouit}/>
                    <div className={styles.validateTouit}>
                        <p>{newTouit.length}/280</p>
                        <button className={styles.button} onClick={() => handleSubmit()}>Touit</button>
                    </div>
                </div>
            </div>
            <div className={styles.rightSide}>
            <h2 className={styles.title}>Trends</h2>
            </div>
        </div>
    );
};

export default Home;