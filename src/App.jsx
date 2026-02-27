import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <h1>Wedding Site Coming Soon</h1>
      </div>
    </BrowserRouter>
  )
}

export default App;