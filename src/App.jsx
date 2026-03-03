import './App.css'
import {Route, Routes} from "react-router-dom"
import Login from './pages/Login'

import Dashboard from './pages/Dashboard'
import ScanDetail from './pages/ScanDetail'

function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element = {<Login/>}/>;
      
      
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/scan/:id" element={<ScanDetail />} />
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />

    </Routes>

    </>
  )
}

export default App
