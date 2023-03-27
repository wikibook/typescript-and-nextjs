import type { NextApiRequest, NextApiResponse } from 'next'

type HelloResponse = {
  name: string
}

// /api/hello에서 호출되었을 때의 API 동작을 구현한다
export default (req: NextApiRequest, res: NextApiResponse<HelloResponse>) => {
  // 상태 200으로 {"name": "John Doe"}를 반환한다
  res.status(200).json({ name: 'John Doe' })
}