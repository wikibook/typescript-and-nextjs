import { NextApiRequest, NextApiResponse } from 'next'
// 아래의 시크릿 키를 여러분의 것을 치환한다
const stripe = require('stripe')('sk_test_xxxxxxxxxxxxxxxxxxx')

export default async function payment(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  // 클라이언트로부터 결제 버튼이 클릭되었을 때, Stripe의 카드 결제를 수행한다
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        // 다음 Price ID를 여러분의 것으로 치환한다
        price: 'price_XXXXXXXXXXXXX',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/payment/success',
    cancel_url: 'http://localhost:3000/payment/cancel',
  })
  res.json({ id: session.id })
}
