const SearchPage = () => {
  const jsonld = {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',
    name: '빵 부스러기 리스트',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: { name: '톱', '@id': 'https://localhost:3000/' },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: { name: '검색', '@id': 'https://localhost:3000/search' },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          name: '상의',
          '@id': 'https://localhost:3000/search/clothes',
        },
      },
    ],
  }

  return (
    <Layout>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
        />
      </Head>
      <ol>
        <li>
          <Link href="/">
            <a>톱</a>
          </Link>
        </li>
        <li>
          <Link href="/search">
            <a>검색</a>
          </Link>
        </li>
        <li>
          <Link href="/search/clothes">
            <a>상의</a>
          </Link>
        </li>
      </ol>
        ...
    </Layout>
  )
}