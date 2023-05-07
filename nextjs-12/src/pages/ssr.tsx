import { time } from 'console'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

type SSRProps = {
  message: string
}

const SSR: NextPage<SSRProps> = (props) => {
  const { message } = props

  return (
    <div>
      <Head>
        <title>Static site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>{message}</p>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<SSRProps> = async (
  context,
) => {
  const timestamp = new Date().toLocaleDateString()
  const message = `${timestamp}にこのページのgetServerSidePropsが実行されたよ`

  return {
    // context.の後に使えるやつ↓
    // req:http.IncomingMessageのインスタンスでリクエストの情報やcookieを参照できる
    // httpServerResponseのインスタンスでCookieをセットしたり、レスポンスヘッダーを書き換えたりに使える
    // resolvedUrl:実際にアクセスがあったパス
    // query:そのクエリをオブジェクトにしたもの
    props: {
      message,
    },
  }
}

export default SSR
