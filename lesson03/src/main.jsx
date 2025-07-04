import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App'
import { EffectAndRef, FocusInput, PreviousValue } from './assets/RefHookTest'
// import App from './App'
// import App from './App.jsx'
// import App from './ArrayTest.jsx'
import App from './App_V1.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* // <FocusInput/> */}
  // </StrictMode>
  // <PreviousValue/>
  // <EffectAndRef/>  
)
