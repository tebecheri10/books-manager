import './App.css'
import Header from './components/Header'
import {
 BrowserRouter,
 Routes,
 Route
} from 'react-router-dom'

import Home from './views/Home'
import UpdateBook from './views/UpdateBook'

const App = () => {
  return (
    <BrowserRouter>
      <Header/> 
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/update/:id" element={<UpdateBook/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
