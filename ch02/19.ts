// 이름과 포맷 함수를 인수로 받아 포맷팅 한 뒤 콘솔에 출력하는 함수를 정의한다
function printName(firstName: string, formatter: (name: string) => string) {
  console.log(formatter(firstName))
}

// san을 뒤에 뭍이는 이름 포맷 함수를 정의한다
function formatName(name: string): string {
  return `${name} san`
}

printName('Takuya', formatName) // Takuya san