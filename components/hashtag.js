import styles from '../styles/Hashtag.module.css'
import Touit from './touit'
import Trends from './Trends'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../reducers/user'
import { loadTouit } from '../reducers/touit'
import { useRouter } from 'next/router'

function Hashtag() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value)
    const touitData = useSelector((state) => state.touit.value)

    // '/login' redirection if not logged in
    const router = useRouter();
    const { hashtag } = router.query
    if (!user.token) {
        router.push('/login');
    }

    const [query, setQuery] = useState('#')

    useEffect(() => {
        if (!hashtag) {
            return
        }

        setQuery('#' + hashtag)

        fetch(`http://localhost:3000/touits/hashtag/${user.token}/${hashtag}`)
            .then(response => response.json())
            .then(data => {
                data.result && dispatch(loadTouit(data.touit))
            })
    }, [hashtag])

    const handleSubmit = () => {
        if (query.length > 1) {
            router.push(`/hashtag/${query.slice(1)}`)
        }
    }

    const touits = touitData.map((data, i) => {
        return <Touit key={i} {...data} />
    })

    // Pop warning window size under 820px width
    const [windowSize, _setWindowSize] = useState([window.innerWidth, window.innerHeight])
    const [warningSize, setWarningSize] = useState(false)

    useEffect(() => {
        window.innerWidth < 820 ? setWarningSize(true) : setWarningSize(false)

        window.addEventListener('resize', () => {
            window.innerWidth < 820 ? setWarningSize(true) : setWarningSize(false)
        })

    }, [windowSize])

    if (warningSize) {
        return (
            <div className={styles.warningSize}>
                <h1>Votre fenêtre est trop petite.</h1>
                <br />
                <p>Le format d'ecran n'est pas adapté. <br /> Veuillez naviguer depuis une tablette ou un ordinateur*.</p>
                <br />
                <p>*Si la page ne s'affiche pas depuis votre ordinateur, <br /> veuillez appuyer sur :
                    <p>Ctrl et - pour Windows et Linux</p>
                    <p>Ctrl et - pour Chrome OS</p>
                    <p>⌘ et - pour Mac</p>
                </p>
            </div>
        )
    } else {
        return (
            <div className={styles.main}>
                <div className={styles.leftSide}>
                    <Link href='/'>
                        <img className={styles.logo} src='/logo.png' alt='logo' />
                    </Link>
                    <div className={styles.userSection}>
                        <div>
                            <img className={styles.avatar} src={user.avatar} alt='avatar' />
                        </div>
                        <div className={styles.userInfo}>
                            <p className={styles.firstName}>{user.firstName}</p>
                            <p className={styles.userName}>@{user.userName}</p>
                            <button className={styles.logout} onClick={() => { router.push('/login'), dispatch(logout()) }}>Logout</button>
                        </div>
                    </div>
                </div>
                <div className={styles.middleSide}>
                    <h2 className={styles.title}>Hashtags</h2>
                    <div className={styles.searchSection}>
                        <input
                            className={styles.input}
                            type='text'
                            onChange={(e) => setQuery('#' + e.target.value.replace(/^#/, ''))}
                            onKeyUp={(e) => e.key === 'Enter' && handleSubmit()}
                            value={query}
                        />
                    </div>
                    {touits.length === 0 && <p className={styles.noTouit}>No touits found with #{hashtag}</p>}
                    {touits}
                </div>
                <div className={styles.rightSide}>
                    <h2 className={styles.title}>Trends</h2>
                    <Trends />
                </div>
            </div>
        )
    }
}

export default Hashtag