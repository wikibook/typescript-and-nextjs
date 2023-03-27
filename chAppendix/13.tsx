# 모든 크롤러를 허가
User-agent: *
# http://localhost:3000/cart 아래의 페이지에 방문하는 것을 금지한다
Disallow: http://localhost:3000/cart
# http://localhost:3000/products/ 아래의 페이지에 방문하는 것을 허가한다
Allow: http://localhost:3000/products/
# Sitemap의 URL을 지정한다
Sitemap: http://localhost:3000/sitemap.xml