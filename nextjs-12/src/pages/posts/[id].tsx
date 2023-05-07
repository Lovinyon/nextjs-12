import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

type PostProps = {
  id: string
}

const Post: NextPage<PostProps> = (props) => {
  const { id } = props
  const router = useRouter()

  if (router.isFallback) {
    // フォールバックページ向け
    return <div>Loading...</div>
  }
  // 存在するやつ向け
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>{`/posts/${id}に対応するページです`}</p>
      </main>
    </div>
  )
}

// getStaticPathsは生成したページのパスパラメータの組み合わせを返す
// このファイルはpage/posts/[id].tsxなのでパラメータとしてidを返す
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        id: '1',
      },
    },
    {
      params: {
        id: '2',
      },
    },
    {
      params: {
        id: '3',
      },
    },
  ]

  return { paths, fallback: false }
}

// パラメータの型定義
interface PostParams extends ParsedUrlQuery {
  id: string
}

// getStaticPaths実行後にそれぞれのパスに対してgetStaticPropsが実行される
export const getStaticProps: GetStaticProps<PostProps, PostParams> = async (
  context,
) => {
  return {
    props: {
      // paramsにgetStatiPathsで指定した値が入っている
      id: context.params!['id'],
    },
  }
}

export default Post
