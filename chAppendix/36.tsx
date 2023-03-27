const Page = () => {
  const url = `javascript:alert('링크를 클릭했습니다')`
  const isValidURL = useMemo(() => {
    // 앞에 http 또는 https로 시작하는지 확인
    return url.match(/^https?:\/\//)
  }, [url])

  return <div>{isValidURL ? <a href={url}>{url}</a> : <span>{url}</span>}</div>
}