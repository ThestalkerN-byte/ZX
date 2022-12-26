
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import Theme from '../styles/theme'
import { createTheme } from '@mui/material'

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme(Theme)
  console.log(theme,'theme');
  
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
