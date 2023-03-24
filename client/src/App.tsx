import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useAppSelector } from './hooks/hooks'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const darkMode = useAppSelector(state => state.darkMode.value)
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light' 
    }
  })

  const dark = createTheme({
    palette: {
      mode: 'dark' 
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </ThemeProvider>
  )
}

export default App
