import './App.css'
import {Route, Routes} from "react-router-dom"
import Login from './Pages/Login'

import Dashboard from './Pages/Dashboard'
import ScanDetail from './Pages/ScanDetail'

function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element = {<Login/>}/>
      
      
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/scan/:id" element={<ScanDetail />} />
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />

    </Routes>

    </>
  )
}

export default App
