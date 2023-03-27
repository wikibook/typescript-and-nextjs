type Identity = {
  id: number | string;
  name: string;
}

type Contact = {
  name: string;
  email: string;
  phone: string;
}

// 합집합을 통한 새로운 Union 타입을 정의한다
// Identity 또는 Contact 타입을 받을 수 있다
type IdentityOrContact = Identity | Contact

// OK
const id: IdentityOrContact = {
  id: '111',
  name: 'Takuya' 
}

// OK
const contact: IdentityOrContact = {
  name: 'Takuya' ,
  email: 'test@example.com',
  phone: '012345678'
}