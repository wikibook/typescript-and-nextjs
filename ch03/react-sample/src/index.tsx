import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'

/* 
  샘플 코드 안의 각 컴포넌트를 표시하기 위해서는
  표시할 컴포넌트의 임포트문과 render 메서드 안의 주석을 해제한다
*/
import App from './App';
// import Hello from './components/Hello'
// import Name from './components/Name'
// import Message from './components/Message'
// import ContainerSample from './components/ContainerSample'
// import ContextSample from './components/ContextSample'
// import UseStateSample from './components/UseStateSample'
// import UseReducerSample from './components/UseReducerSample'
// import MemoSample1 from './components/MemoSample1'
// import MemoSample2 from './components/MemoSample2'
// import UseCallbackSample from './components/UseCallbackSample'
// import UseMemoSample from './components/UseMemoSample'
// import UseEffectSample from './components/UseEffectSample'
// import UseLayoutEffectSample from './components/UseLayoutEffectSample'
// import UseContextSample from './components/UseContextSample'
// import UseRefSample from './components/UseRefSample'
// import UseImperativeHandleSample from './components/UseImperativeHandleSample'
// import UseCustomHookSample from './components/UseCustomHookSample'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <App />
  // <Hello />
  // <Name />
  // <Message />
  // <ContainerSample />
  // <ContextSample />
  // <UseStateSample initialValue={0} />
  // <UseReducerSample initialValue={0} />
  // <MemoSample1 />
  // <MemoSample2 />
  // <UseCallbackSample />
  // <UseMemoSample />
  // <UseEffectSample />
  // <UseLayoutEffectSample />
  // <UseContextSample />
  // <UseRefSample />
  // <UseImperativeHandleSample />
  // <UseCustomHookSample />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
