import Link from 'next/link'

const link = () => {
  return (
    <div>
      {/* Linkコンポーネントでaタグをラップする */}
      <Link href="/ssr">
        <a>Go To SSR</a>
      </Link>

      {/* クエリパラメータを指定 hrefにはオブジェクトの指定も可能 */}
      <Link
        href={{
          pathname: '/ssg',
          query: { keyword: 'hello' },
        }}
      >
        <a>Go To SSR</a>
      </Link>

      {/* buttonを使用するとLinkの子コンポーネントにonClickコールバックが渡され、それが呼ばれるとページが遷移 */}
      <Link href="/ssr">
        <button>Jump to SSG page</button>
      </Link>
    </div>
  )
}

export default link
