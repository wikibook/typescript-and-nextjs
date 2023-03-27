const Page = () => {
  const router = useRouter()
  const url = `javascript:alert('버튼을 클릭했습니다')`

  const onClick = useCallback(() => {
    router.push(url)
  }, [])

  return (
    <div>
      <button onClick={onClick}>버튼을 클릭하면 얼럿이 표시됩니다</button>
    </div>
  )
}