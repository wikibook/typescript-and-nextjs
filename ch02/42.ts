class BasePoint3D {
  public x: number;
  private y: number;
  protected z: number;
}

// 인터페이스화 했을 떄의 접근 제어 예
const basePoint = new BasePoint3D()
basePoint.x // OK
basePoint.y // 컴파일 시 에러가 발생한다. private이므로 접근할 수 없다.
basePoint.z // 컴파일 시 에러가 발생한다. protected이므로 접근할 수 없다.

// 클래스를 상속했을 때의 접근 제어 예
class ChildPoint extends BasePoint3D {
  constructor() {
    super()
    this.x // OK
    this.y // 컴파일 시 에러가 발생한다. private이므로 접근할 수 없다.
    this.z // protected는 문제없이 접근할 수 있다.
  }
}