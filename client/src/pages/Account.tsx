import { Avatar, Box, CssBaseline, Fade, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { useAppSelector } from '../hooks/hooks';

function Account() {
  const user = useAppSelector(state => state.user.jmbgData?.[0])
  const email = useAppSelector(state => state.user.userData?.email)
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
          
        </Box>
      </Container>
      </Fade>
  )
}

export default Account