import React from 'react'
import { GetServerSideProps } from 'next'
import getAllUsers from 'services/users/get-all-users'
import type { ApiContext } from 'types'
import getAllProducts from 'services/products/get-all-products'

const SiteMap = () => null

type SitemapInfo = {
  path: string
  lastmod?: Date
  changefreq:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never'
  priority: number
}

// 정적으로 결정되어 있는 경로를 정의
const StaticPagesInfo: SitemapInfo[] = [
  {
    path: '/',
    changefreq: 'hourly',
    priority: 1.0,
  },
  {
    path: '/search',
    changefreq: 'always',
    priority: 1.0,
  },
  {
    path: '/signin',
    changefreq: 'daily',
    priority: 0.5,
  },
]

// 동적인 경로의 정보를 얻는다
const getProductPagesInfo = async (): Promise<SitemapInfo[]> => {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || 'http://localhost:5000',
  }
  const products = await getAllProducts(context)

  return products.map((product) => ({
    path: `/products/${product.id}`,
    changefreq: 'daily',
    priority: 0.5,
  }))
}

const getUserPagesInfo = async (): Promise<SitemapInfo[]> => {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || 'http://localhost:5000',
  }
  const users = await getAllUsers(context)

  return users.map((user) => ({
    path: `/users/${user.id}`,
    changefreq: 'daily',
    priority: 0.5,
  }))
}

// 각 페이지의 정보로부터 sitemap.xml을 생성한다
const generateSitemapXML = (baseURL: string, sitemapInfo: SitemapInfo[]) => {
  // <url> 태그를 생성한다
  const urls = sitemapInfo.map((info) => {
    const children = Object.entries(info)
      .map(([key, value]) => {
        if (!value) return null

        switch (key) {
          case 'path':
            return `<loc>${baseURL}${value}</loc>`
          case 'lastmod': {
            const year = value.getFullYear()
            const month = value.getMonth() + 1
            const day = value.getDate()

            return `<lastmod>${year}-${month}-${day}</lastmod>`
          }
          default:
            return `<${key}>${value}</${key}>`
        }
      })
      .filter((child) => child !== null)

    return `<url>${children.join('\n')}</url>`
  })

  // 공통의 XML 부분을 감싼다
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join(
    "\n"
  )}</urlset>`
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  // 베이스 URL을 req에서 얻는다
  const host = req?.headers?.host ?? 'localhost'
  const protocol =
    req.headers['x-forwarded-proto'] || req.connection.encrypted
      ? 'https'
      : 'http'
  const base = `${protocol}://${host}`

  // sitemap.xml에 필요한 URL을 열거
  const simtemapInfo = [
    ...StaticPagesInfo,
    ...(await getProductPagesInfo()),
    ...(await getUserPagesInfo()),
  ]

  const sitemapXML = generateSitemapXML(base, simtemapInfo)

  // 캐시를 설정하고, 24시간에 1번 정도의 빈도로 XML을 생성하도록 한다
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate')
  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemapXML)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap