class Point3D extends Point {
  z: number;

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    // 상속원의 생성자를 호출한다
    super(x, y)
    this.z = z
  }

  moveZ(n: number): void {
    this.z += n
  }
}

const point3D = new Point3D()
// 상속원의 메서드를 호출할 수 있다
point3D.moveX(10)
point3D.moveZ(20)
console.log(`${point3D.x}, ${point3D.y}, ${point3D.z}`) // 10, 0, 20