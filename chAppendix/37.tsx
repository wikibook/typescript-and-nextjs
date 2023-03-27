// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rootPaths: ["./src"],
  async headers() {
    return [
      {
        // 모든 페이지에 설정
        source: "/(.*)",
        // 사용할 보안 헤더를 지정
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          ...
        ],
      },
    ]
  }
}

module.exports = nextConfig