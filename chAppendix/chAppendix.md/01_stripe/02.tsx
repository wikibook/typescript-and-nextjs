import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

// 아래 공키 가능키는 여러분의 것으로 치환한다
const stripePromise = loadStripe('pk_test_XXXXXXXXXXXXX')

function Payment() {
  const createPaymentSession = async () => {
    const stripe = await stripePromise
    if (stripe) {
      // 앞에서 구현한 서버 사이드의 API를 호출한다
      const res = await axios.post('/api/payment/session')
      // JSON 형식으로 반환되는 세션 ID를 지정해서 Stripe 결제 페이지로 리다이렉트한다
      const result = await stripe.redirectToCheckout({
        sessionId: res.data.id,
      })
      if (result.error) {
        alert(result.error.message)
      }
    }
  }

  return (
    <div>
      <section>
        <div>
          <h3>T-Shirt</h3>
          <h5>20,000KRW</h5>
        </div>
        <div>
          <button onClick={createPaymentSession}>구입한다</button>
        </div>
      </section>
    </div>
  )
}

export default Payment