import { Box, Container, CssBaseline, Fade, Grid, Typography } from '@mui/material'
import { useAppSelector } from '../hooks/hooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../components/MyButton';


function Home() {
  const navigate = useNavigate()
  const name = useAppSelector(state => state.user.jmbgData?.[0]?.name)

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget as HTMLElement
    navigate(`/${target.id}`)
  }
  
  return (
    <Fade in={true} timeout={1000}>
      <Container maxWidth='lg'>
        <CssBaseline />
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row'
        }}>
          <Grid container justifyContent='center' spacing='20px'>
            <Grid item mt='85px' xs={12}>
              <Typography fontSize={{xs: '45px', sm: '55px'}} color='text.primary' fontWeight={500} align='center'>Pozdrav, <span style={{ fontWeight: '800' }}>{name?.split(' ')[0]}!</span></Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography mt='-20px' fontSize={{xs: '25px', sm: '35px'}} color='text.primary' fontWeight={500} align='center'>Kako vam možemo pomoći?</Typography>
            </Grid>
              <Grid item md={4} sm={6} xs={8}>
                <MyButton onClick={onClick} id='uslugeOpcine' typographyText='usluge Općine' />
                <MyButton onClick={onClick} id='uslugePolicije' typographyText='usluge policije' />
                <MyButton onClick={onClick} id='account' typographyText='Korisnički račun' />

                  
                
              </Grid>
          </Grid>

        </Box>
      

      </Container>
      </Fade>
  )
}

export default Home