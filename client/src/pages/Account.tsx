import { Avatar, Box, CssBaseline, Fade, IconButton, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
function Account() {
  const user = useAppSelector(state => state.user.jmbgData?.[0])
  const email = useAppSelector(state => state.user.userData?.email)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }
  return (
    <Fade in timeout={750}>
      <Container maxWidth='lg'>
        <Box sx={{
          mt: {sm: '200px', xs: '150px'},
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <CssBaseline />
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: 121, height: 121 }}>
            <PersonIcon sx={{width: '69px', height: '78px'}}/>
          </Avatar>
          <Typography fontWeight='500' fontSize='45px'>{user?.name}</Typography>
          <Typography mt='-10px' fontWeight='500' fontSize='15px'>{email}</Typography>
          <Typography mt='8px' sx={{fontSize: {sm: '30px', xs: '25px'}}}>{user?.dob}</Typography>
          <Typography sx={{fontSize: {sm: '30px', xs: '25px'}}}>Mjesto rođenja: {user?.pob}</Typography>
          <Typography sx={{fontSize: {sm: '30px', xs: '25px'}}}>JMBG: {user?.jmbg}</Typography>
          <IconButton onClick={handleLogout}>
          <Typography mr='10px'>Odjavi se</Typography>
          <LogoutIcon color='primary' />
            
          </IconButton>
        </Box>
      </Container>
      </Fade>
  )
}

export default Account