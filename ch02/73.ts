// null을 명시적으로 허용하도록 타입을 정의한다
let date: Date | null
date = new Date()
// 컴파일 에러는 발생하지 않는다
date = null