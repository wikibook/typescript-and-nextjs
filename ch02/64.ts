// 비동기 함수를 정의합니다
function fetchFromServer(id: string): Promise<{success: boolean}> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({success: true})
    }, 100)
  })
}

// 비동기 처리를 포함하는 async function의 반환값의 타입은 Promise이다.
async function asyncFunc(): Promise<string> {
  // Promise한 값을 await하면 내용을 추출할 수 있다(그렇게 보인다)
  const result = await fetchFromServer('111')
  return `The result: ${result.success}`
}

// await 구문을 사용하기 위해서는 async function 안에서 호출해야 한다
(async () => {
  const result = await asyncFunc()
  console.log(result)
})()

// Promise로서 다룰 때는 다음과 같이 기술합니다
asyncFunc().then(result => console.log(result))