import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import styles from '../styles/Trends.module.css'

function Trends() {
    const user = useSelector((state) => state.user.value)
    const touitData = useSelector((state) => state.touit.value)

    const [trendData, setTrenddata] = useState([])

    useEffect(() => {
        fetch(`https://touittaire-back.vercel.app/touits/trends/${user.token}`)
            .then(response => response.json())
            .then(data => {
                data.result && setTrenddata(data.trends)
            })
    }, [touitData])

    const trends = trendData.map((data, i) => {
        return (
            <Link key={i} href={`/hashtag/${data.hashtag.slice(1)}`}>
                <div className={styles.hashtagContainer}>
                    <h3 className={styles.hashtag}>{data.hashtag}</h3>
                    <h4 className={styles.countTouit}>{data.count} Touit{data.count > 1 && 's'}</h4>
                </div>
            </Link>
        )
    })

    return (
        <div className={styles.container}>
            {trends}
        </div>
    )
}

export default Trends