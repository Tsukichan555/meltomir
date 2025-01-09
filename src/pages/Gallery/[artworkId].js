import Layout from '../../components/arrangement/Layout/Layout'
import { getAllPostIds, getPostData } from '../../../lib/artworks'
import Head from 'next/head'
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
    <>
      <Layout post={postData}>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article className={styles.articleWrapper}>
          <h1 className={styles.artworkTitle}>{postData.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    </>
  )
}

