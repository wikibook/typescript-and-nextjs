// 미래에 상수가 추가될 가능성이 있는 enum 타입을 정의한다
enum PageType {
  ViewProfile,
  EditProfile,
  ChangePassword,
}

const getTitleText = (type: PageType) => {
  switch (type) {
    case PageType.ViewProfile:
      return 'Setting'
    case PageType.EditProfile:
      return 'Edit Profile'
    case PageType.ChangePassword:
      return 'Change Password'
    default:
      // 결코 일어나지 않는 일을 컴파일러에게 전달하는 never 타입에 대입한다.
      // 이로 인해 만약 미래 PageType의 enum 타입에 상수가 새롭게 추가되었을 때
      // 컴파일 시에 에러가 발생하기 때문에 버그를 미연에 방지해서 대응할 수 있다.
      const wrongType: never = type
      throw new Error(`${wrongType} is not in PageType`)
  }
}