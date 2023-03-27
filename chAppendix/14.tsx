# 이미지용 Google bot에는 /users 아래의 페이지에 방문하는 것을 금지한다
User-agent: Googlebot-Image
Disallow: http://localhost:3000/users

# 모든 크롤러에 대해 유효한 규칙
User-agent: *
Allow: /

Sitemap: http://localhost:3000/sitemap.xml