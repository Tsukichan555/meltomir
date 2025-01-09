import Layout from '../../components/arrangement/Layout/Layout'
import { getAllPostIds, getPostData } from '../../../lib/artworks' 
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../style/Artwork.module.css'

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.artworkId);
    return {
        props: {
            postData
        }
    };
}

export default function Artwork({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div>
        <Image className={styles.thumbnailAsHeader} src={postData.thumbnail} alt={postData.title} width={100} height={100} />
      </div>
      <article className={styles.explanation}>
        <h1>{postData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}
