interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

// 여러 인터페이스를 상속해서 새로운 인터페이스를 정의할 수 있다
interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: '빨강',
  radius: 10
}