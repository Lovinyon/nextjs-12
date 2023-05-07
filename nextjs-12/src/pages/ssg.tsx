// 型のためにNextPage
import { GetStaticProps, NextPage, NextPageContext } from 'next'
// next.jsの組み込みコンポーネント
import Head from 'next/head'
// ページコンポーネントのpropsの型定義
type SSGProps = {
  message: string
}
// SSGはgetStaticPropsが定義したpropsを受け取ることができる
// NextPage<SSGProps>はmessage:stringのみを受け取る生成
const SSG: NextPage<SSGProps> = (props) => {
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

// ビルド時に実行
// GetStaticProps<SSGProps>はSSPropsを引数に取るgetStaticPropsの型
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}にgetStaticPropsが実行された`
  console.log(message)
  return {
    // context.の後に使えるやつ↓
    // params:パスパラメータ
    // locale:現在のロケール情報
    // locales:サポートしているロケールの配列
    // defaultLocale:デフォルトのロケールのデータ
    // preview:Preview Modeかどうか
    // previewData:Preview ModeでsetPreviewDataによってセットされたデータ
    props: {
      message,
    },
  }
}

export default SSG
