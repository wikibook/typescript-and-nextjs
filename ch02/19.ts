// 이름과 포맷 함수를 인수로 받아 포맷팅 한 뒤 콘솔에 출력하는 함수를 정의한다
function printName(firstName: string, formatter: (name: string) => string) {
  console.log(formatter(firstName))
}

// '씨'를 뒤에 붙이는 이름 포맷 함수를 정의한다
function formatName(name: string): string {
  return `${name} 씨`
}

printName('홍길동', formatName) // 홍길동 씨
