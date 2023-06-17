import './App.css'
import Header from './components/Header/Header'
import {
 BrowserRouter,
 Routes,
 Route
} from 'react-router-dom'
import Home from './views/Home'
import UpdateBook from './views/UpdateBook'
import AddNewBook from './views/AddNewBook'
import AlertModal from './components/AlertModal/AlertModal'

const App = () => {
  return (
    <BrowserRouter>
      <Header/> 
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/update/:id" element={<UpdateBook/>} />
          <Route path="/add-new-book" element={<AddNewBook/>} />
      </Routes>
      <AlertModal/>
    </BrowserRouter>
  )
}

export default App
