import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer';
import Login from './pages/Login'
import Main from './pages/Main';
import Register from './pages/Register'
import Start from './pages/Start';


function App() {


  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/start' element={<Start />}/>
      </Routes>
      <Footer />
     </div>
  )
}

export default App
