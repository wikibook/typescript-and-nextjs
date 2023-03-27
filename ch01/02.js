// util.js 파일 정의
export const sum = (x, y) => x + y

// util.js를 읽는 main.js
import { sum } from './util.js'
console.log(sum(5, 2)) // 7