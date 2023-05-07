// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

// /api/helloで呼ばれた時のAPIの挙動の定義
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  // ステータスコード200で以下を返す
  res.status(200).json({ name: 'John Doe' })
}
