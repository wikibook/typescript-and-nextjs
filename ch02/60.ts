// 속성명은 임의의 number로서 다루는 방법을 정의한 예이다.
type SupportVersions = {
  [env: number]: boolean;
}

// string의 속성에 정의한 경우 에러가 발생한다
let versions: SupportVersions = {
  102: false,
  103: false,
  104: true,
  'v105': true // -> error가 된다
}