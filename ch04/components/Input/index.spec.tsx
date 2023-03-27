import { render, screen, RenderResult, fireEvent, getByRole } from '@testing-library/react'
import { Input } from './index'

// describe로 처리를 모은다
describe('Input', () => {
  let renderResult: RenderResult

  // 각 테스트 케이스 이전에 컴포넌트를 그리고, renderResult에 설정한다
  beforeEach(() => {
    renderResult = render(<Input id="username" label="Username" />)
  })

  // 테스트 케이스 실행 후에 그리던 컴포넌트를 릴리스한다
  afterEach(() => {
    renderResult.unmount()
  })

  // 초기 그리기 시에 input 요소가 비어있는 것을 테스트
  it('should empty in input on initial render', () => {
    // label이 Username인 컴포넌트에 대응하는 input의 요소를 얻는다
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement

    // input 요쇼 표시가 비었는지 확인한다
    expect(inputNode).toHaveValue('')
  })

  // 문자를 입력하면, 입력한 내용이 표시되는 것을 테스트
  it('should show input text', () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement

    // fireEvent를 사용해 input 요소의 onChange 이벤트를 트리거한다
    fireEvent.change(inputNode, { target: { value: inputText } })

    // input 요소에 입력한 텍스트가 표시되는지 확인한다
    expect(inputNode).toHaveValue(inputText)
  })

  // 버튼이 클릭되었다면 입력 텍스트가 삭제되는지 확인
  it('should reset when user clicks button', () => {
    // 처음에 input에 텍스트를 입력한다
    const inputText = 'Test Input Text'
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement
    fireEvent.change(inputNode, { target: { value: inputText } })

    // 버튼을 얻는다
    const buttonNode = screen.getByRole('button', {
      name: 'Reset',
    }) as HTMLButtonElement
    // 버튼을 클릭한다
    fireEvent.click(buttonNode)

    // input 요소 표시가 비어있는지 확인한다
    expect(inputNode).toHaveValue('')
  })
})