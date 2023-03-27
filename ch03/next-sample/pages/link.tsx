import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

// 타입 애너테이션이 없어도 빌드를 통과하므로 생략한다
function LinkSample() {
  const router = useRouter()

  const onSubmit = () => {
    // /ssr로 이동한다
    router.push('/ssr')

    // 문자열 대신 객체로 지정할 수 있다
    // /ssg?keyword=hello로 이동한다
    router.push({
      pathname: '/ssg',
      query: { keyword: 'hello' },
    })
  }

  const onClickReload = () => {
    router.reload()
  }

  const onClickBack = () => {
    router.back()
  }

  useEffect(() => {
    // 이동 시작 시의 이벤트를 구독한다
    router.events.on('routeChangeStart', (url, { shallow }) => {
      console.log('routeChangeStart', url)
    })

    // 이동 완료 시의 이벤트를 구독한다
    router.events.on('routeChangeComplete', (url, { shallow }) => {
      console.log('routeChangeComplete', url)
    })
  }, [])

  return (
    <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '12px'}}>
      <Link href="/ssg">
        <a>Go TO SSG</a>
      </Link>
      <Link href="/ssg?keyword=next">
        <a>GO TO SSG with keyword "next"</a>
      </Link>
      <Link
        href={{
          pathname: '/ssg',
          query: { keyword: 'hello' },
        }}>
        <a>GO TO SSG with keyword "hello"</a>
      </Link>
      <Link href="/ssg">
        {/* a 대신 button을 사용하면, onClick이 호출되는 시점에 이동한다 */}
        <button>Jump to SSG page</button>
      </Link>
      <button onClick={onSubmit}>Submit</button>
      <button onClick={onClickReload}>Reload</button>
      <button onClick={onClickBack}>Back</button>

    </div>
  )
}

export default LinkSample