import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ScheduleTable from './components/ScheduleTable.jsx'
import Test0704 from './components/lesson04/Test0704.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* usestate 복습 */}
    {/* <ScheduleTable/> */}
    <Test0704/>
  </StrictMode>,
)
