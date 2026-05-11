import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { ProductsPage } from './pages/productPage'
import './styles/landing.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/productos" element={<ProductsPage />} />
    </Routes>
  )
}

export default App
