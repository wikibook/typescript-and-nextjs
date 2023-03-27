let mynumber: string = '200'
mynumber = '이백' // string 타입이므로 문제없이 대입할 수 있다
mynumber = 200 // string 타입 변수에 number 타입을 대입하려 하면 컴파일러 에러가 발생한다. Type 'number' is not assignable to type 'string'.
