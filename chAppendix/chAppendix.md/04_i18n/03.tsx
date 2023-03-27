// (1) Link에 지정하는 방법
import Link from 'next/link'
const Page = (props) => {
  return (
    <Link href="/profile" locale="en">
      <a>영어용 /profile 페이지로 이동합니다</a>
    </Link>
  )
}

// (2) router에 지정하는 방법
const Page = (props) => {
  const router = useRouter()
  return (
    <div
      onClick={() => {
        router.push('/profile', { locale: 'ko' })
      }}
    >
      한국어용 /profile 페이지로 이동합니다
    </div>
  )
}