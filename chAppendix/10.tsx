const SearchPage = () => {
  return (
    <Layout>
      ...
      <ol itemscope itemtype="https://schema.org/BreadcrumbList">
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
          <Link href="/">
            <a itemprop="item">
              <span itemprop="name">
                톱
              </span>
            </a>
            <meta itemprop="position" content="1" />
          </Link>
        </li>
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
          <Link href="/search">
            <a itemprop="item">
              <span itemprop="name">
                검색
              </span>
            </a>
            <meta itemprop="position" content="2" />
          </Link>
        </li>
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
          <Link href="/search/clothes">
            <a itemprop="item">
              <span itemprop="name">
                상의
              </span>
            </a>
            <meta itemprop="position" content="3" />
          </Link>
        </li>
      </ol>
        ...
    </Layout>
  )
}