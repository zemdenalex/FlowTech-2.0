import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Initialize i18n (side-effect import)
import '@flowtech/shared/i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)
