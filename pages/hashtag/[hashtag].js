import { useRouter } from 'next/router'
import Head from  'next/head'
import Hashtag from '../../components/hashtag'

function HashtagPage() {
    const router = useRouter()
    const {hashtag} = router.query

    return (
        <>
        <Head>
            <title>#{hashtag} / Touittaire</title>
        </Head>
        <Hashtag/>
        </>
    )
}

export default HashtagPage