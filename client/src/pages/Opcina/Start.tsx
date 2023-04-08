import React from 'react'
import { Box, Container, CssBaseline, Fade, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import MyButton from '../../components/MyButton';


export default function Start() {
  const navigate = useNavigate()

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget as HTMLElement
    navigate(`/uslugeOpcine/${target.id}`)
  }
  
  return (
      <Fade in={true} timeout={400}>
        <Container maxWidth='lg'>
          <CssBaseline />
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row'
          }}>
            <Grid container justifyContent='center' spacing='20px'>
              <Grid item mt='85px' xs={12}>
                <Typography fontSize={{xs: '45px', sm: '55px'}} color='text.primary' fontWeight={600} align='center'>Usluge Općine</Typography>
              </Grid>
              
                <Grid mt='30px' item md={4} sm={6} xs={8}>
                  <MyButton onClick={onClick} id='uvjerenja' typographyText='uvjerenja' />
                  <MyButton onClick={onClick} id='izvodi' typographyText='izvodi' />    
                </Grid>
            </Grid>

          </Box>
        

        </Container>
      </Fade>
  )
}

