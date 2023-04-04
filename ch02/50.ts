// 앞에서 설명한 Identity와 Contact를 정의한다.
// 교집합을 통한 새로운 Intersection 타입을 정의한다.
// Identity와 Contact 양쪽의 모든 속성이 병합된 타입으로 다룬다.
type Employee = Identity & Contact

// OK
const employee: Employee = {
  id: '111',
  name: 'Hana',
  email: 'test@example.com',
  phone: '012345678'
}

// 에러: Contact 정보만으로 변수를 정의할 수 없다. id가 필요하다.
const employeeContact: Employee = {
  name: 'Hana',
  email: 'test@example.com',
  phone: '012345678'
}
