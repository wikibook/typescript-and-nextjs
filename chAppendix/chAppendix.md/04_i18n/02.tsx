import { useRouter } from 'next/router'

const Page = (props) => {
  const {locale} = useRouter()

  return (
    <div>
    {locale === 'ja' && <span>日本語向けの表示です</span>}
    {locale === 'en' && <span>英語向けの表示です</span>}
    </div>
  )
}

export async function getServerSideProps({ locale }) {
    console.log(locale)
}

export default Page