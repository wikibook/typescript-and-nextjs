const SearchPage = () => {
  return (
    <Layout>
      ...
      <ol>
        <li>
          <Link href="/">
            <a>トップ</a>
          </Link>
        </li>
        <li>
          <Link href="/search">
            <a>検索</a>
          </Link>
        </li>
        <li>
          <Link href="/search/clothes">
            <a>トップス</a>
          </Link>
        </li>
      </ol>
        ...
    </Layout>
  )
}