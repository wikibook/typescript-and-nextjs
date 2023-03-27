const Page = () => {
  const url = `javascript:alert('링크를 클릭했습니다')`

  return (
    <div>
      <a href={url}>링크를 클릭하면 얼럿이 표시됩니다</a>
      <Link href={url}>
        <a>Next 링크에서도 동일하게 표시됩니다</a>
      </Link>
    </div>
  )
}