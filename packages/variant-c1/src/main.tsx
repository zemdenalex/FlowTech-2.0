import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

import '@flowtech/shared/i18n'

const base = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={base}>
    <App />
  </BrowserRouter>
)
