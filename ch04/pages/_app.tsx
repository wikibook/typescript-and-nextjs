import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  // styled-conponents로 테마를 사용하기 위해 ThemeProvider를 둔다
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
