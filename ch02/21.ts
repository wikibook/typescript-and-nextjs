function genBirdsInfo(name: string): string[]{
  return name.split(',')
}

// 함수 타입을 사용
// (x: string) => string[]
function singBirds(birdInfo: (x: string) => string[]): string{
  return birdInfo('hato, kiji')[0] + ' piyo piyo'
}

console.log(singBirds(genBirdsInfo)) // "hato piyo piyo"
console.log(singBirds('dobato')) // 타입이 맞지 않으므로 에러