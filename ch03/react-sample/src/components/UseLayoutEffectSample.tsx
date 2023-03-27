import { useState, useEffect, useLayoutEffect } from 'react'

// 타이머가 호출되는 주기를 1초로 한다
const UPDATE_CYCLE = 1000

// localstorage에서 사용하는 키
const KEY_LOCALE = 'KEY_LOCALE'

enum Locale {
  US = 'en-US',
  KO = 'ko-KR',
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US
    case Locale.KO:
      return Locale.KO
    default:
      return Locale.US
  }
}

const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date())
  const [locale, setLocale] = useState(Locale.US)

  // 타이머를 설정하기 위한 부작용
  useEffect(() => {
    // 타이머 셋
    const timer = setInterval(() => {
      setTimestamp(new Date())
    }, UPDATE_CYCLE)

    // 클린업 함수를 전달하고, 언마운트 시에 타이머를 해제한다
    return () => {
      clearInterval(timer)
    }
    // 로기 그리기 시에만 실행한다
  }, [])

  // useEffect에서 useLayoutEffect로 변경한다
  useLayoutEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE)
    if (savedLocale !== null) {
      setLocale(getLocaleFromString(savedLocale))
    }
  }, [])

  // locale이 바뀌었을 때, localstorage에 값을 저장하기 위한 부작용
  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale)
    // 의존 배열에 locale을 전달하고, locale이 변화할 때마다 실행되도록 한다
  }, [locale])

  return (
    <div>
      <p>
        <span id="current-time-label">현재 시각</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <select
          value={locale}
          onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
          <option value="en-US">en-US</option>
          <option value="ko-KR">ko-KR</option>
        </select>
      </p>
    </div>
  )
}

export default Clock
