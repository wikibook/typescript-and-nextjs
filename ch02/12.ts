const mixedArray = ['foo', 1]
const mixedArrayU: (string|number)[] = ['foo', 1] // Union 타입
const mixedArrayT: [string, number] = ['foo', 1] // 튜플