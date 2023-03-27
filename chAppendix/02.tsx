const HomePage = ({
  bookProducts,
  clothesProducts,
  shoesProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log('HomePage 컴포넌트의 그리기에서 호출되는 로그입니다')
  ...
}

export async function getStaticProps() {
  ...
  console.log('getStaticProps 안에서 호출된 로그입니다')
  ...
}

export default HomePage