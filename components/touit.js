import { useDispatch, useSelector } from "react-redux"
import { deleteTouit, likeTouit } from "../reducers/touit"
import { FaHeart, FaTrash } from "react-icons/fa"
import Link from 'next/link'
import Moment from 'react-moment'
import styles from '../styles/Touit.module.css'

function Touit(props) {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.value)

    const handleLike = () => {
        fetch(`https://touittaire-back.vercel.app/touits/like`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ token: user.token, touitId: props._id }),
        }).then(response => response.json())
            .then(data => {
                data.result && dispatch(likeTouit({ touitId: props._id, userName: user.userName }))
            })
    }

    const handleDelete = () => {
        fetch(`https://touittaire-back.vercel.app/touits`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ token: user.token, touitId: props._id })
        }).then(response => response.json())
            .then(data => {
                data.result && dispatch(deleteTouit(props._id))
            })

    }

    let likedTouit = {}
    if (props.like.some(e => e.userName === user.userName)) {
        likedTouit = { 'color': '#f9196f' }
    }

    const formattedContent = props.content.split(' ').map((word, i) => {
        if (word.startsWith('#') && word.length > 1) {
            return <span key={i} style={{ fontWeight: 'bold' }}><Link href={`/hashtag/${word.slice(1)}`}><a className={styles.hashtag}>{word}</a></Link></span>
        }
        return word + ' '
    })

    return (
        <div className={styles.container}>
            <div className={styles.userInfo}>
                <img className={styles.avatar} src={props.author.avatar} alt="avatar" />
                <p className={styles.content}>
                    <span className={styles.firstName}>{props.author.firstName}</span>
                    <span className={styles.userName}>@{props.author.userName} · <Moment className={styles.moment} fromNow ago>{props.createdAt}</Moment></span>
                </p>
            </div>
            <p className={styles.touit}>{formattedContent}</p>
            <FaHeart className={styles.heart} onClick={() => handleLike()} style={likedTouit} />
            <span style={likedTouit}>{props.like.length}</span>

            {props.author.userName === user.userName && <FaTrash className={styles.trash} onClick={() => handleDelete()} />}
        </div>
    )

}

export default Touit