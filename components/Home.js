import styles from '../styles/Home.module.css'

const Home = () => {
    return (
        <div className={styles.main}>
            <div className={styles.leftSide}>
                <img src="/logo.png" alt="logo" className={styles.logo}/>
            </div>
            <div className={styles.middleSide}>
                <h2 className={styles.title}>Home</h2>
            </div>
            <div className={styles.rightSide}>
            </div>
        </div>
    );
};

export default Home;