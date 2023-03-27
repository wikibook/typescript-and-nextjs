import { render, screen, RenderResult, fireEvent, act } from '@testing-library/react'
import { DelayInput } from './index'

// DelayInput 컴포넌트에 관한 테스트
describe('DelayInput', () => {
  let renderResult: RenderResult
  let handleChange: jest.Mock

  beforeEach(() => {
    // 목 함수를 작성한다
    handleChange = jest.fn()

    // 목 함수를 DelayButton에 전달해서 그린다
    renderResult = render(<DelayInput onChange={handleChange} />)

    // 타이머를 jest의 것으로 치환한다
    jest.useFakeTimers()
  })

  afterEach(() => {
    renderResult.unmount()

    // 타이머를 원래 것으로 되돌린다
    jest.useFakeTimers()
  })

  // span 요소의 텍스트가 비어있는 것을 테스트
  it('should display empty in span on initial render', () => {
    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

    // 초기 표시는 비어있다
    expect(spanNode).toHaveTextContent('입력한 텍스트:')
  })

  // 입력 직후는 span 요소가 '입력 중...'이라 표시하는지 테스트
  it('should display 「입력 중...」 immediately after onChange event occurs', () => {
      const inputText = 'Test Input Text'
      const inputNode = screen.getByTestId('input-text') as HTMLInputElement
  
      // input의 onChange 이벤트를 호출한다
      fireEvent.change(inputNode, { target: { value: inputText } })
  
      const spanNode = screen.getByTestId('display-text') as HTMLSpanElement
  
      // 입력 중이라고 표시하는지 확인
      expect(spanNode).toHaveTextContent('입력 중...')
  })

  // 입력해서 1초 후에 텍스트가 표시되는지 테스트
  it('should display input text 1 second after onChange event occurs', async () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement

    // input의 onChange 이벤트를 호출한다
    fireEvent.change(inputNode, { target: { value: inputText } })

    // act 함수 안에서 실행함으로써, 타이머의 콜백 안에서 발생하는 상태 변경이 반영되는 것을 보증한다
    await act(() => {
      // 타이머에 설정된 timeout을 모두 실행한다
      jest.runAllTimers() 
    })

    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

    // 입력한 텍스트가 표시되는지 확인
    expect(spanNode).toHaveTextContent(`입력한 텍스트: ${inputText}`)
  })

  // 입력해서 1초 후에 onChange가 호출되는지 테스트
  it('should call onChange 1 second after onChange event occurs', async () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement

    // input의 onChange 이벤트를 호출한다
    fireEvent.change(inputNode, { target: { value: inputText } })

    // 타이머 실행
    await act(() => {
      jest.runAllTimers() 
    })

    // 목 함수를 전달해, 호출되었는지 확인한다
    expect(handleChange).toHaveBeenCalled()
  })
})