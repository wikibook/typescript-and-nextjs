// 옵셔널 속성으로 info를 정의한다
type User = {
  info?: {
    name: string;
    age: number;
  }
}

let response = {}
// response는 JSON 형식의 API 응답이 대입되어 있다고 가정한다. User에 타입 어서션을 한다.
const user = (response as any) as User

// 옵셔널 속성에 대한 타입 가드를 수행한다.
if (user.info) {
  // 옵셔널 속성 하위 속성인 user.info.name에 접근해도 에러가 발생하지 않는다.
  // 만약 if의 조건이 없을 때는 Object is possibly 'undefined'. 라는 에러가 발생한다
  console.log(user.info.name)
}