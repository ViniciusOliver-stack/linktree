import React from 'react'
import ReactDOM from 'react-dom/client'

import { Home } from './src/pages/Home'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './src/styles/global'
import theme from './src/styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Home/>
    </ThemeProvider>
  </React.StrictMode>,
)
