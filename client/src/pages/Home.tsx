import { Box, Container, CssBaseline, Fade, Grid, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button, { ButtonProps } from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import React, { useEffect } from 'react';
import { getJmbgData, getUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

interface MyButtonProps extends ButtonProps {
  id: string,
  typographyText: string
}

function MyButton({id, typographyText, ...props}: MyButtonProps){
  const EndIcon = ({ typographyId }: { typographyId: string }) => (
    <ArrowForwardIosIcon id={id} fontSize='large' />
  )
  return (
    <Button {...props} id={id} endIcon={<EndIcon typographyId={id} />} fullWidth sx={{height: {md: '90px', xs: '70px'}, mt: '20px'}} variant="contained">
      <Typography fontWeight={600} id={id} fontSize={{md: '25px', sm: '22px', xs: '18px'}}>{typographyText}</Typography>
    </Button>
  )
}


function Home() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  // useEffect(() => {
  //   dispatch(getJmbgData())
  //   dispatch(getUser())
  // }, [])

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement
    navigate(`/${target.id}`)
  }
  const name = useAppSelector(state => state.user.jmbgData?.[0]?.name)
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