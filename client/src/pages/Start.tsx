import { Box, Button, Container, CssBaseline, Grid, Paper, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { useEffect } from 'react';
import { getJmbgData } from '../features/user/userSlice';


function Start() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getJmbgData())
  }, [])
  const name = useAppSelector(state => state.user.jmbgData[0]!.name)
  return (
    <Container maxWidth='lg'>
      <CssBaseline />
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
      }}>
        <Grid container justifyContent='center' spacing='20px'>
          <Grid item mt='85px' xs={12}>
            <Typography fontSize={{xs: '45px', md: '55px'}} color='text.primary' fontWeight={500} align='center'>Pozdrav, <span style={{ fontWeight: '800' }}>{name}!</span></Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography mt='-20px' fontSize={{xs: '25px', md: '35px'}} color='text.primary' fontWeight={500} align='center'>Kako vam mozemo pomoci?</Typography>
          </Grid>
            <Grid mt='30px' item xs={4}>
              <Box sx={{
                flexDirection: 'column'
              }}>
                <Button endIcon={<ArrowForwardIosIcon fontSize='large' sx={{ml: '80px'}} />} fullWidth sx={{height: '90px'}} variant="contained"><Typography fontWeight={600} fontSize='25px'>Usluge opcine</Typography></Button>
                <Button endIcon={<ArrowForwardIosIcon fontSize='large' sx={{ml: '80px', }} />} fullWidth sx={{height: '90px', mt: '20px'}} variant="contained"><Typography fontWeight={600} fontSize='25px'>Usluge policije</Typography></Button>
              </Box>
              
            </Grid>
        </Grid>

      </Box>
    

    </Container>
  )
}

export default Start