import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AdviceContextProvider } from './context/AdviceContext';
import { FavoriteContextProvider } from './context/FavoriteContext';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AdviceContextProvider>
      <FavoriteContextProvider>
        <App />
      </FavoriteContextProvider>
    </AdviceContextProvider>
  </React.StrictMode>,
)
