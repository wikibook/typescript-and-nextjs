let date: Date
date = new Date()
// strincNullChecks를 활성화한 경우, null을 대입하려고 할 때 컴파일 에러가 발생한다.
// error TS2322: Type 'null' is not assignable to type 'Date'.
date = null