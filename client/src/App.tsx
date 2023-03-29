import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer';
import Account from './pages/Account';
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { resetAuth } from './features/auth/authSlice';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Opcina from './pages/Opcina/Opcina';
import Policija from './pages/Policija/Policija';
import { getJmbgData, getUser, resetUser } from './features/user/userSlice';

function App() {
  const jwt = localStorage.getItem('jwt')
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useAppDispatch()
  const auth = useAppSelector(state => state.auth)
  const user = useAppSelector(state => state.user)

  useEffect(() => {
    if(!jwt){
      navigate('/login')
    }
  }, [jwt])

  useEffect(() => {
    if(auth.isSuccess){
      navigate('/home')
      dispatch(resetAuth)
    }

    if(auth.isError){
      toast.error(auth.message)
    }

    if(!user.userData || !user.jmbgData){
      if(jwt){
        dispatch(getJmbgData())
        dispatch(getUser())
        dispatch(resetUser())
      }  
    }

  }, [auth.isSuccess, auth.isError, auth])

  useEffect(() => {
    if(location.pathname === '/'){
      navigate('/home')
    }
  }, [])

  useEffect(() => {
    if(user.isSuccess){ 
      dispatch(resetUser())
    }

    if(user.isError){
      toast.error(user.message)
    }

  }, [user.isSuccess, user.isError, user])
   
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/account' element={<Account />}/>
        <Route path='/uslugeOpcine/*' element={<Opcina />}/>
        <Route path='/uslugePolicije/*' element={<Policija />}/>
      </Routes>
      <Footer />
      <ToastContainer />
     </div>
  )
}

export default App
