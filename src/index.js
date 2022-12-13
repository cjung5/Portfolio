import { render } from 'react-dom'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import './index.css'

import { BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
