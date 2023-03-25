import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer';
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#00ABE4',
        contrastText: "#fff",  
      },
      secondary: {
        main: '#00ABE4',
        contrastText: "#fff"  
      },
      text: {
        primary: '#1E375A'
      }
      
    },
    typography: {
      fontFamily: 'Poppins',
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App
