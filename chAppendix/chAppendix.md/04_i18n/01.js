/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // 지원할 언어
    locales: ['ko', 'en'],
    // 기본으로 표시할 언어
    defaultLocale: 'ko',
    // 도메인으로 나눌 때는 도메인별로 설정을 기술한다
    domains: [
      {
        domain: 'example.co.kr',
        defaultLocale: 'kr',
      },
      {
        domain: 'example.com',
        defaultLocale: 'en',
      },
    ],
  }
}

module.exports = nextConfig
