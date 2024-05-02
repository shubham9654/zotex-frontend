import React from 'react'
import ReactDOM from 'react-dom/client'
import { Windmill } from '@windmill/react-ui'

import './index.css'
import App from './App.jsx'
import { theme } from './utils/theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Windmill usePreferences theme={theme}>
      <App />
    </Windmill>
  </React.StrictMode>,
)
