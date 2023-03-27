import { useRouter } from 'next/router' // 임포트
import { useEffect } from 'react' // 부작용을 수반하는 처리용으로 도입

const Page = () => {
  const router = useRouter() // useRouter 사용

  // 다음 주석 부분의 주석을 해제히면 /userouter로 이동하게 된다
  // 주: 샘플 프로젝트에는 /userouter에 대응하는 페이지가 없다
  useEffect( () => {
      router.push('/userouter')
  })

  return <span>{router.pathname}</span>
}

export default Page