...
import logger from 'utils/logger'

const HomePage = ({
  bookProducts,
  clothesProducts,
  shoesProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  ...
  logger.info('HomePage 컴포넌트 그리기 함수 안에서 호출된 로그입니다')
  ...
}

export async function getStaticProps() {
  ...
  logger.info('getStaticProps 안에서 호출된 로그입니다')
  ...
}

export default HomePage